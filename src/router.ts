import type React from "react";

export const routes = ["/", "/prepare", "/care", "/training", "/health", "/quiz"] as const;

export type RoutePath = (typeof routes)[number];

export function normalizePath(pathname: string): RoutePath {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  return routes.includes(cleanPath as RoutePath) ? (cleanPath as RoutePath) : "/";
}

export function navigateTo(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return;
  }

  event.preventDefault();
  if (window.location.pathname !== href) {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}
