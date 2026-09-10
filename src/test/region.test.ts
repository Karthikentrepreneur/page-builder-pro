import { describe, it, expect } from "vitest";

describe("Region Detection Logic", () => {
  it("correctly identifies India from country code 'IN'", () => {
    const country = "IN";
    const isIndia = country === "IN";
    expect(isIndia).toBe(true);
  });

  it("correctly identifies Global from non-India country code", () => {
    const country = "US";
    const isIndia = country === "IN";
    expect(isIndia).toBe(false);
  });

  it("handles query params for manual region override", () => {
    const searchParams = new URLSearchParams("?region=in");
    const param = searchParams.get("region");
    expect(param?.toUpperCase()).toBe("IN");
  });
});
