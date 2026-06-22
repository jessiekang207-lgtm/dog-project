import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { navigateTo } from "../router";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function LinkButton({ href, children, variant = "primary" }: LinkButtonProps) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      onClick={(event) => navigateTo(event, href)}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
    </a>
  );
}
