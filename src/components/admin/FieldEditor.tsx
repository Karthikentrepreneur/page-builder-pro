import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Upload, ImageIcon, GripVertical, ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import { uploadImage } from "@/lib/content";
import { toast } from "sonner";
import { getIcon, iconNames } from "@/lib/icons";
import { cn } from "@/lib/utils";

function labelize(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/** Blank copy of a value, used as the template when adding array items. */
function blankOf(value: unknown): unknown {
  if (typeof value === "string") return "";
  if (typeof value === "number") return 0;
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = blankOf(v);
    return out;
  }
  return "";
}

/** True when a string field should get the image uploader (by key name or value). */
function isImageField(fieldKey: string | undefined, value: string): boolean {
  const k = (fieldKey ?? "").toLowerCase();
  if (k.includes("link") || k.includes("url") && !k.includes("image")) return false;
  if (k === "image" || k.includes("image") || k === "logo" || k.includes("logo") || k === "icon" && false) return true;
  return /\.(png|jpe?g|webp|gif|svg|ico|avif)$/i.test(value.split("?")[0]);
}

function IconField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const Preview = getIcon(value);
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-white">
        <Preview className="h-5 w-5 text-primary" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
      >
        {iconNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      onChange(url);
      toast.success("Image uploaded — remember to Save.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white">
        {value ? (
          <img src={value} alt="" className="h-full w-full object-contain" />
        ) : (
          <ImageIcon className="h-6 w-6 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1 space-y-2 min-w-0">
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="/image.jpg or upload a file" className="text-sm" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
        <Button type="button" variant="outline" size="sm" disabled={uploading} onClick={() => fileRef.current?.click()}>
          <Upload className="h-4 w-4 mr-1" />
          {uploading ? "Uploading..." : "Upload image"}
        </Button>
      </div>
    </div>
  );
}

function ArrayEditor({
  value,
  depth,
  fieldKey,
  onChange,
}: {
  value: unknown[];
  depth: number;
  fieldKey?: string;
  onChange: (v: unknown[]) => void;
}) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [activeDragIndex, setActiveDragIndex] = useState<number | null>(null);
  const [collapsedMap, setCollapsedMap] = useState<Record<number, boolean>>({});

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= value.length || from === to) return;
    const next = [...value];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
  };

  const isObjectItems = value.some((item) => item && typeof item === "object");
  const allCollapsed = value.length > 0 && value.every((_, i) => collapsedMap[i]);

  const toggleAllCollapse = () => {
    if (allCollapsed) {
      setCollapsedMap({});
    } else {
      const nextMap: Record<number, boolean> = {};
      value.forEach((_, i) => (nextMap[i] = true));
      setCollapsedMap(nextMap);
    }
  };

  const getItemLabel = (item: unknown, index: number) => {
    if (item && typeof item === "object") {
      const obj = item as Record<string, unknown>;
      const title = obj.title || obj.name || obj.heading || obj.label || obj.role || obj.letter;
      if (title) return String(title);
    }
    return `Item ${index + 1}`;
  };

  return (
    <div className="space-y-3">
      {isObjectItems && value.length > 1 && (
        <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
          <span className="font-medium text-slate-600">
            {value.length} items (drag grip to reorder)
          </span>
          <button
            type="button"
            onClick={toggleAllCollapse}
            className="text-primary hover:underline font-medium flex items-center gap-1"
          >
            {allCollapsed ? "Expand all items" : "Collapse all items"}
          </button>
        </div>
      )}

      {value.map((item, i) => {
        const isCollapsed = collapsedMap[i];
        const isDragging = draggedIndex === i;
        const isOver = dragOverIndex === i && draggedIndex !== i;
        const itemTitle = getItemLabel(item, i);

        return (
          <div
            key={i}
            draggable={activeDragIndex === i}
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", String(i));
              e.dataTransfer.effectAllowed = "move";
              setDraggedIndex(i);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
              if (dragOverIndex !== i) setDragOverIndex(i);
            }}
            onDragLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                if (dragOverIndex === i) setDragOverIndex(null);
              }
            }}
            onDrop={(e) => {
              e.preventDefault();
              if (draggedIndex !== null && draggedIndex !== i) {
                moveItem(draggedIndex, i);
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
              "rounded-xl border transition-all duration-200 bg-blue-50/40 p-3",
              isDragging && "opacity-40 border-dashed border-primary ring-2 ring-primary/20",
              isOver && "border-primary ring-2 ring-primary/40 bg-blue-100/50 scale-[1.01]",
              !isDragging && !isOver && "border-blue-100"
            )}
          >
            {/* Header row */}
            <div className="flex items-center gap-2">
              {/* Drag Handle */}
              <button
                type="button"
                onMouseDown={() => setActiveDragIndex(i)}
                onMouseUp={() => setActiveDragIndex(null)}
                onTouchStart={() => setActiveDragIndex(i)}
                onTouchEnd={() => setActiveDragIndex(null)}
                className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-primary p-1 rounded hover:bg-white/80 transition-colors"
                title="Drag to reorder"
                aria-label="Drag handle"
              >
                <GripVertical className="h-4 w-4" />
              </button>

              {/* Move Up/Down Buttons */}
              <div className="flex flex-col -space-y-0.5">
                <button
                  type="button"
                  disabled={i === 0}
                  onClick={() => moveItem(i, i - 1)}
                  className="text-slate-400 hover:text-primary disabled:opacity-20 p-0.5"
                  title="Move up"
                >
                  <ChevronUp className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  disabled={i === value.length - 1}
                  onClick={() => moveItem(i, i + 1)}
                  className="text-slate-400 hover:text-primary disabled:opacity-20 p-0.5"
                  title="Move down"
                >
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>

              {/* Number Badge */}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                {i + 1}
              </span>

              {/* Item Title & Collapse Toggle (if item is object) */}
              {isObjectItems ? (
                <button
                  type="button"
                  onClick={() =>
                    setCollapsedMap((prev) => ({ ...prev, [i]: !prev[i] }))
                  }
                  className="flex-1 min-w-0 text-left font-medium text-sm text-slate-800 hover:text-primary flex items-center justify-between gap-2 px-2 py-1 rounded hover:bg-white/60 transition-colors"
                >
                  <span className="truncate">{itemTitle}</span>
                  {isCollapsed ? (
                    <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                  )}
                </button>
              ) : (
                <div className="flex-1" />
              )}

              {/* Delete Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 h-7 w-7"
                onClick={() => onChange(value.filter((_, j) => j !== i))}
                title="Remove item"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Content body (shown when not collapsed or if item is primitive) */}
            {(!isObjectItems || !isCollapsed) && (
              <div className="mt-3 pt-3 border-t border-blue-100/60">
                <FieldEditor
                  value={item}
                  depth={depth + 1}
                  fieldKey={fieldKey}
                  onChange={(v) => {
                    const next = [...value];
                    next[i] = v;
                    onChange(next);
                  }}
                />
              </div>
            )}
          </div>
        );
      })}

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="border-primary/50 text-primary hover:bg-blue-50"
        onClick={() => onChange([...value, blankOf(value[0] ?? "")])}
      >
        <Plus className="h-4 w-4 mr-1" /> Add item
      </Button>
    </div>
  );
}

export function FieldEditor({
  value,
  onChange,
  depth = 0,
  fieldKey,
}: {
  value: unknown;
  onChange: (v: unknown) => void;
  depth?: number;
  fieldKey?: string;
}) {
  if (typeof value === "string") {
    if (fieldKey?.toLowerCase() === "icon") {
      return <IconField value={value} onChange={onChange} />;
    }
    if (isImageField(fieldKey, value)) {
      return <ImageField value={value} onChange={onChange} />;
    }
    return value.length > 80 ? (
      <Textarea value={value} rows={Math.min(6, Math.ceil(value.length / 80))} onChange={(e) => onChange(e.target.value)} className="text-sm" />
    ) : (
      <Input value={value} onChange={(e) => onChange(e.target.value)} className="text-sm" />
    );
  }

  if (typeof value === "number") {
    return <Input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="text-sm w-40" />;
  }

  if (Array.isArray(value)) {
    return <ArrayEditor value={value} depth={depth} fieldKey={fieldKey} onChange={onChange} />;
  }

  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    return (
      <div className={depth > 0 ? "space-y-3" : "space-y-5"}>
        {Object.entries(obj).map(([k, v]) => (
          <div key={k}>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primary/70">
              {labelize(k)}
            </label>
            <FieldEditor value={v} depth={depth + 1} fieldKey={k} onChange={(nv) => onChange({ ...obj, [k]: nv })} />
          </div>
        ))}
      </div>
    );
  }

  return null;
}
