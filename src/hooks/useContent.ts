import { useQuery } from "@tanstack/react-query";
import { getAllContent } from "@/lib/content";
import { defaults } from "@/content/defaults";

/**
 * A hook to fetch and access all page content.
 * Falls back to bundled defaults so pages render immediately without crashing.
 *
 * @returns An object with the content data, loading state, and error state.
 */
export const useAllContent = () => {
  const { data, isLoading, isError, error } = useQuery<Record<string, any>>({
    queryKey: ["content"],
    queryFn: getAllContent,
    placeholderData: defaults,
    staleTime: 1000 * 30, // 30 seconds
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  const merged = { ...(defaults as Record<string, any>), ...(data || {}) };

  return { data: merged, isLoading, isError, error };
};

/**
 * A hook to get a specific section of the page content.
 * It relies on useAllContent and provides the bundled default content as a fallback.
 *
 * @param section The key of the content section to retrieve.
 * @returns The content for the specified section.
 */
export const useContent = (section: string) => {
  const { data } = useAllContent();
  const defaultSection = (defaults as Record<string, any>)[section] || {};
  const currentSection = data?.[section];

  if (!currentSection) {
    return defaultSection;
  }

  // If both default and current section are objects, merge so missing subfields are preserved
  if (
    typeof defaultSection === "object" &&
    defaultSection !== null &&
    !Array.isArray(defaultSection) &&
    typeof currentSection === "object" &&
    currentSection !== null &&
    !Array.isArray(currentSection)
  ) {
    return { ...defaultSection, ...currentSection };
  }

  return currentSection;
};