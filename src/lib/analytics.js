"use client";
export function track(event, props) {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(event, { props });
  }
}
