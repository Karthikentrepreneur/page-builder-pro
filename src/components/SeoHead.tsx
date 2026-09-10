import { useEffect } from "react";
import { useContent } from "@/hooks/useContent";

function setMetaByName(name: string, content: string) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Applies this page's meta tags from the `seo` content section. Renders nothing. */
export function SeoHead({ page }: { page: string }) {
  const seo = useContent("seo") as Record<string, { metaTitle: string; metaDescription: string; keywords: string; ogTitle: string; ogDescription: string; ogImage: string }>;
  const entry = seo[page];

  useEffect(() => {
    if (!entry) return;
    if (entry.metaTitle) document.title = entry.metaTitle;
    setMetaByName("description", entry.metaDescription);
    setMetaByName("keywords", entry.keywords);
    setMetaByProperty("og:title", entry.ogTitle || entry.metaTitle);
    setMetaByProperty("og:description", entry.ogDescription || entry.metaDescription);
    setMetaByProperty("og:image", entry.ogImage);
  }, [entry]);

  return null;
}
