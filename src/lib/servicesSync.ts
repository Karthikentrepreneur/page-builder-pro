/**
 * Helper utility to synchronize service items order between services_page and home_services.
 */

export interface ServiceItem {
  icon?: string;
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  badge?: string;
  [key: string]: unknown;
}

/**
 * Reorders targetServices to match the relative sequence of sourceServices.
 * Matches primarily by route link (e.g. "/services/SoftwareSolutions"),
 * then by title (exact and fuzzy match).
 * Any unmatched target items are retained at the end so no data is lost.
 */
export function syncServicesOrder<T extends ServiceItem, U extends ServiceItem>(
  sourceServices: T[],
  targetServices: U[]
): U[] {
  if (!Array.isArray(sourceServices) || !Array.isArray(targetServices)) {
    return targetServices || [];
  }

  const targetPool = [...targetServices];
  const matchedTargetItems: U[] = [];

  for (const src of sourceServices) {
    const srcLink = (src.link || "").toLowerCase().trim();
    const srcTitle = (src.title || "").toLowerCase().trim();

    let matchIdx = -1;

    // 1. Match by route link
    if (srcLink) {
      matchIdx = targetPool.findIndex(
        (t) => (t.link || "").toLowerCase().trim() === srcLink
      );
    }

    // 2. If no link match, match by exact title
    if (matchIdx === -1 && srcTitle) {
      matchIdx = targetPool.findIndex(
        (t) => (t.title || "").toLowerCase().trim() === srcTitle
      );
    }

    // 3. If still no match, match by substring (e.g. "Customer Service" vs "Customer Service & Nomination")
    if (matchIdx === -1 && srcTitle) {
      matchIdx = targetPool.findIndex((t) => {
        const tTitle = (t.title || "").toLowerCase().trim();
        return (
          (tTitle.length > 3 && srcTitle.includes(tTitle)) ||
          (srcTitle.length > 3 && tTitle.includes(srcTitle))
        );
      });
    }

    if (matchIdx !== -1) {
      matchedTargetItems.push(targetPool[matchIdx]);
      targetPool.splice(matchIdx, 1);
    }
  }

  // Append any target items that did not match source items
  return [...matchedTargetItems, ...targetPool];
}
