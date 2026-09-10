import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  GripVertical,
  ChevronUp,
  ChevronDown,
  Save,
  ArrowUpDown,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { getIcon } from "@/lib/icons";
import { syncServicesOrder, ServiceItem } from "@/lib/servicesSync";
import { cn } from "@/lib/utils";

interface ServicesOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSection: "services_page" | "home_services";
  servicesPageContent?: Record<string, unknown>;
  homeServicesContent?: Record<string, unknown>;
  onApply: (updates: {
    services_page?: Record<string, unknown>;
    home_services?: Record<string, unknown>;
  }) => Promise<void>;
}

export function ServicesOrderDialog({
  open,
  onOpenChange,
  activeSection,
  servicesPageContent,
  homeServicesContent,
  onApply,
}: ServicesOrderDialogProps) {
  const isServicesPage = activeSection === "services_page";
  const sourceContent = isServicesPage ? servicesPageContent : homeServicesContent;
  const targetContent = isServicesPage ? homeServicesContent : servicesPageContent;

  const rawSourceItems = (sourceContent?.items as ServiceItem[]) || [];

  const [items, setItems] = useState<ServiceItem[]>([]);
  const [syncWithOther, setSyncWithOther] = useState(true);
  const [saving, setSaving] = useState(false);

  // Drag & drop state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [activeDragIndex, setActiveDragIndex] = useState<number | null>(null);

  // Synchronize internal items whenever the dialog opens or source items change
  useEffect(() => {
    if (open) {
      const currentItems = (sourceContent?.items as ServiceItem[]) || [];
      setItems(JSON.parse(JSON.stringify(currentItems)));
      setDraggedIndex(null);
      setDragOverIndex(null);
      setActiveDragIndex(null);
    }
  }, [open, sourceContent]);

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= items.length || from === to) return;
    setItems((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  const handleReset = () => {
    setItems(JSON.parse(JSON.stringify(rawSourceItems)));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const updates: {
        services_page?: Record<string, unknown>;
        home_services?: Record<string, unknown>;
      } = {};

      // 1. Updated source section
      const updatedSource = {
        ...(sourceContent || {}),
        items,
      };

      if (isServicesPage) {
        updates.services_page = updatedSource;
      } else {
        updates.home_services = updatedSource;
      }

      // 2. If sync is enabled, sync order to the other section
      if (syncWithOther && targetContent) {
        const rawTargetItems = (targetContent.items as ServiceItem[]) || [];
        const syncedTargetItems = syncServicesOrder(items, rawTargetItems);
        const updatedTarget = {
          ...targetContent,
          items: syncedTargetItems,
        };

        if (isServicesPage) {
          updates.home_services = updatedTarget;
        } else {
          updates.services_page = updatedTarget;
        }
      }

      await onApply(updates);
      onOpenChange(false);
    } finally {
      setSaving(false);
    }
  };

  const otherSectionName = isServicesPage ? "Home Page (Home — Services)" : "Services Page";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-6 overflow-hidden sm:rounded-2xl">
        <DialogHeader className="pb-2 border-b">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <ArrowUpDown className="h-4 w-4" />
            <span>Visual Order Editor</span>
          </div>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Drag & Drop Services Order
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Reorder the services list by dragging the handle or using the up/down arrows.
            Items at the top appear first on the live website.
          </DialogDescription>
        </DialogHeader>

        {/* Sync checkbox option */}
        <div className="mt-4 rounded-xl border border-blue-200/80 bg-blue-50/60 p-4 transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="sync-services"
              checked={syncWithOther}
              onCheckedChange={(c) => setSyncWithOther(Boolean(c))}
              className="mt-0.5"
            />
            <div className="space-y-1">
              <Label
                htmlFor="sync-services"
                className="text-sm font-semibold text-gray-900 cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
                Sync order with {otherSectionName}
              </Label>
              <p className="text-xs text-gray-600">
                Automatically keep the services order synchronized on both the Services page and Home page.
              </p>
            </div>
          </div>
        </div>

        {/* Draggable items list */}
        <div className="flex-1 overflow-y-auto my-4 pr-1 space-y-2.5">
          {items.map((service, index) => {
            const IconComponent = getIcon(service.icon || "Box");
            const isDragging = draggedIndex === index;
            const isOver = dragOverIndex === index && draggedIndex !== index;

            return (
              <div
                key={service.link || service.title || index}
                draggable={activeDragIndex === index}
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", String(index));
                  e.dataTransfer.effectAllowed = "move";
                  setDraggedIndex(index);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                  if (dragOverIndex !== index) {
                    setDragOverIndex(index);
                  }
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    if (dragOverIndex === index) {
                      setDragOverIndex(null);
                    }
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (draggedIndex !== null && draggedIndex !== index) {
                    moveItem(draggedIndex, index);
                  }
                  setDraggedIndex(null);
                  setDragOverIndex(null);
                  setActiveDragIndex(null);
                }}
                onDragEnd={() => {
                  setDraggedIndex(null);
                  setDragOverIndex(null);
                  setActiveDragIndex(null);
                }}
                className={cn(
                  "flex items-center gap-3 p-3.5 rounded-xl border bg-white shadow-sm transition-all select-none",
                  isDragging && "opacity-40 border-dashed border-primary ring-2 ring-primary/20",
                  isOver && "border-primary ring-2 ring-primary/40 bg-blue-50/50 scale-[1.01]",
                  !isDragging && !isOver && "hover:border-blue-300 hover:shadow"
                )}
              >
                {/* Drag handle */}
                <button
                  type="button"
                  onMouseDown={() => setActiveDragIndex(index)}
                  onMouseUp={() => setActiveDragIndex(null)}
                  onTouchStart={() => setActiveDragIndex(index)}
                  onTouchEnd={() => setActiveDragIndex(null)}
                  className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-primary p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Drag to reorder"
                  aria-label={`Drag to reorder ${service.title || `Service ${index + 1}`}`}
                >
                  <GripVertical className="h-5 w-5" />
                </button>

                {/* Position Badge */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                  {index + 1}
                </span>

                {/* Service Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary border border-blue-100">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Service Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-gray-900 truncate">
                      {service.title || `Service ${index + 1}`}
                    </h4>
                    {service.badge && (
                      <span className="inline-block bg-sky-100 text-sky-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  {service.link && (
                    <span className="text-xs text-muted-foreground truncate block">
                      {service.link}
                    </span>
                  )}
                </div>

                {/* Up / Down Buttons for 1-click precision */}
                <div className="flex flex-col gap-0.5 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    disabled={index === 0}
                    onClick={() => moveItem(index, index - 1)}
                    className="h-6 w-6 text-slate-400 hover:text-primary hover:bg-blue-50 disabled:opacity-20"
                    title="Move up"
                  >
                    <ChevronUp className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    disabled={index === items.length - 1}
                    onClick={() => moveItem(index, index + 1)}
                    className="h-6 w-6 text-slate-400 hover:text-primary hover:bg-blue-50 disabled:opacity-20"
                    title="Move down"
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <DialogFooter className="pt-3 border-t flex items-center justify-between gap-3 sm:justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="text-gray-600 gap-1.5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Order
          </Button>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-sky-600 text-white gap-2"
            >
              <Save className="h-4 w-4" />
              {saving ? "Saving Order..." : "Apply & Save Order"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
