import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
  activeOptions?: unknown;
  activeProps?: { className?: string };
};

export function AppLink({ to, children, className = "", activeOptions: _activeOptions, activeProps, ...props }: AppLinkProps) {
  const path = typeof window === "undefined" ? "/" : window.location.pathname;
  const isActive = to === "/" ? path === "/" : path.startsWith(to);
  const activeClass = isActive ? (activeProps?.className ?? "") : "";

  return (
    <a href={to} className={[className, activeClass].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}

