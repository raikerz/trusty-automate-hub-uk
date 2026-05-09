import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Lightweight SEO helper for a SPA. Updates document.title and selected
 * meta tags on mount/update — no external dependency required.
 */
export function Seo({ title, description, ogTitle, ogDescription }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
  }, [title, description, ogTitle, ogDescription]);
  return null;
}

function setMeta(attr: "name" | "property", key: string, value?: string) {
  if (!value) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}
