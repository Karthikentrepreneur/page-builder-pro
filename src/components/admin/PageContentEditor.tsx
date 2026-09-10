import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  RefreshCw,
  Save,
  ArrowUpDown,
  Sparkles,
  GripVertical,
} from "lucide-react";
import { toast } from "sonner";
import { getAllContent, updateContent } from "@/lib/content";
import { defaults } from "@/content/defaults";
import { FieldEditor } from "./FieldEditor";
import { ServicesOrderDialog } from "./ServicesOrderDialog";
import { syncServicesOrder, ServiceItem } from "@/lib/servicesSync";

const SECTION_LABELS: Record<string, string> = {
  header: "Header & Navigation",
  hero: "Home — Hero Slider",
  home_mission_vision: "Home — Mission & Vision",
  home_services: "Home — Services",
  home_team: "Home — Meet Our Team",
  home_about: "Home — About Section",
  global_impact: "Global Impact Stats",
  footer: "Footer",
  about_page: "About Page",
  services_page: "Services Page",
  founders_page: "Management Team Page",
  clients_page: "Clients Page",
  contact_page: "Contact Page",
  locations_section: "Office Locations Map",
  careers_page: "Careers Page",
  employees_corner: "Employee's Corner",
  service_documentation: "Service — Documentation",
  service_salessupport: "Service — Sales Support",
  service_accountsmanagement: "Service — Financial Management",
  service_customerservice: "Service — Customer Service",
  service_softwaresolutions: "Service — Software Solutions",
  seo: "SEO — Meta Tags",
};

function labelize(key: string): string {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function PageContentEditor() {
  const queryClient = useQueryClient();
  const [ready, setReady] = useState(false);
  const [content, setContent] = useState<Record<string, unknown>>({});
  const [selected, setSelected] = useState<string>("services_page");
  const [saving, setSaving] = useState(false);
  const [reorderDialogOpen, setReorderDialogOpen] = useState(false);
  const [syncServicesOnSave, setSyncServicesOnSave] = useState(true);

  const sections = Object.keys(defaults);
  const isServicesSection = selected === "services_page" || selected === "home_services";

  useEffect(() => {
    (async () => {
      try {
        const all = await getAllContent();
        setContent({ ...JSON.parse(JSON.stringify(defaults)), ...all });
      } catch {
        toast.error("Could not load content from the server — showing bundled defaults.");
        setContent(JSON.parse(JSON.stringify(defaults)));
      }
      setReady(true);
    })();
  }, []);

  const onSave = async () => {
    setSaving(true);
    try {
      const updatesToSave: Record<string, unknown> = {
        [selected]: content[selected],
      };

      // If currently on services_page or home_services and sync is enabled:
      if (isServicesSection && syncServicesOnSave) {
        const otherSectionKey = selected === "services_page" ? "home_services" : "services_page";
        const currentItems = ((content[selected] as Record<string, unknown>)?.items as ServiceItem[]) || [];
        const otherContent = (content[otherSectionKey] as Record<string, unknown>) || {};
        const otherItems = (otherContent.items as ServiceItem[]) || [];

        if (currentItems.length > 0 && otherItems.length > 0) {
          const syncedOtherItems = syncServicesOrder(currentItems, otherItems);
          const updatedOtherContent = {
            ...otherContent,
            items: syncedOtherItems,
          };
          updatesToSave[otherSectionKey] = updatedOtherContent;
        }
      }

      for (const [secKey, secVal] of Object.entries(updatesToSave)) {
        await updateContent(secKey, secVal);
      }

      // Immediately invalidate and refetch content across all frontend components
      queryClient.setQueryData(["content"], (old: Record<string, unknown> | undefined) => ({
        ...(old || {}),
        ...updatesToSave,
      }));
      await queryClient.invalidateQueries({ queryKey: ["content"] });
      setContent((c) => ({ ...c, ...updatesToSave }));

      if (isServicesSection && syncServicesOnSave) {
        const otherName = SECTION_LABELS[selected === "services_page" ? "home_services" : "services_page"];
        toast.success(
          `Saved "${SECTION_LABELS[selected]}" and synchronized services order with ${otherName}!`
        );
      } else {
        toast.success(`Saved "${SECTION_LABELS[selected] ?? labelize(selected)}" — changes are live.`);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleApplyOrderFromDialog = async (updates: {
    services_page?: Record<string, unknown>;
    home_services?: Record<string, unknown>;
  }) => {
    setSaving(true);
    try {
      for (const [secKey, secVal] of Object.entries(updates)) {
        await updateContent(secKey, secVal);
      }

      queryClient.setQueryData(["content"], (old: Record<string, unknown> | undefined) => ({
        ...(old || {}),
        ...updates,
      }));
      await queryClient.invalidateQueries({ queryKey: ["content"] });
      setContent((c) => ({ ...c, ...updates }));

      const keysUpdated = Object.keys(updates);
      if (keysUpdated.length > 1) {
        toast.success("Services order updated and synchronized across Services Page & Home Page!");
      } else {
        toast.success(`Services order updated for "${SECTION_LABELS[keysUpdated[0]] || keysUpdated[0]}"!`);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save reordered services");
      throw err;
    } finally {
      setSaving(false);
    }
  };

  if (!ready) {
    return (
      <div className="flex items-center justify-center py-24">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-1">
          {sections.map((s) => {
            const isSelected = selected === s;
            const isServices = s === "services_page" || s === "home_services";

            return (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className={`flex items-center justify-between w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  isSelected
                    ? "bg-primary font-medium text-white shadow-sm"
                    : "text-slate-700 hover:bg-blue-50"
                }`}
              >
                <span className="truncate">{SECTION_LABELS[s] ?? labelize(s)}</span>
                {isServices && (
                  <span
                    className={`ml-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isSelected ? "bg-white/20 text-white" : "bg-blue-100 text-primary"
                    }`}
                    title="Drag & drop reordering available"
                  >
                    <GripVertical className="h-3 w-3" />
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        <Card className="p-6">
          {/* Action Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {SECTION_LABELS[selected] ?? labelize(selected)}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Edit content and manage the display order.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {isServicesSection && (
                <>
                  <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                    <Checkbox
                      id="sync-on-save-top"
                      checked={syncServicesOnSave}
                      onCheckedChange={(c) => setSyncServicesOnSave(Boolean(c))}
                    />
                    <Label
                      htmlFor="sync-on-save-top"
                      className="cursor-pointer font-medium flex items-center gap-1.5"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                      Sync order with {selected === "services_page" ? "Home Services" : "Services Page"}
                    </Label>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setReorderDialogOpen(true)}
                    className="border-primary text-primary hover:bg-primary/10 gap-2"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                    Reorder Services
                  </Button>
                </>
              )}

              <Button
                onClick={onSave}
                disabled={saving}
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-sky-600 shadow-sm"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>

          {/* Special Quick-Reorder Banner for Services Sections */}
          {isServicesSection && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/40 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <ArrowUpDown className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base flex items-center gap-2">
                    Drag & Drop Services Order
                    <span className="bg-blue-100 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Quick Tool
                    </span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Visually reorder service cards with drag-and-drop or use the handles in the list below.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => setReorderDialogOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white shadow-sm gap-2"
              >
                <GripVertical className="h-4 w-4" />
                Open Visual Reorder
              </Button>
            </div>
          )}

          {/* Form Content Field Editor */}
          <FieldEditor
            value={content[selected]}
            onChange={(v) => setContent((c) => ({ ...c, [selected]: v }))}
          />

          {/* Bottom Save Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
            {isServicesSection ? (
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Checkbox
                  id="sync-on-save-bottom"
                  checked={syncServicesOnSave}
                  onCheckedChange={(c) => setSyncServicesOnSave(Boolean(c))}
                />
                <Label
                  htmlFor="sync-on-save-bottom"
                  className="cursor-pointer font-medium flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  Sync order with {selected === "services_page" ? "Home Services" : "Services Page"}
                </Label>
              </div>
            ) : (
              <div />
            )}

            <Button
              onClick={onSave}
              disabled={saving}
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-sky-600 shadow-sm"
            >
              <Save className="h-4 w-4 mr-2" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Card>
      </div>

      {/* Visual Drag & Drop Reordering Modal */}
      {isServicesSection && (
        <ServicesOrderDialog
          open={reorderDialogOpen}
          onOpenChange={setReorderDialogOpen}
          activeSection={selected as "services_page" | "home_services"}
          servicesPageContent={content.services_page as Record<string, unknown>}
          homeServicesContent={content.home_services as Record<string, unknown>}
          onApply={handleApplyOrderFromDialog}
        />
      )}
    </>
  );
}
