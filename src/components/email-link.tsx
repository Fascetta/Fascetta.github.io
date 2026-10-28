"use client";

import { useState, type ReactNode } from "react";

type EmailLinkProps = {
  encoded: string;
  className?: string;
  children: ReactNode;
};

// Keeps the address out of the static HTML so scrapers can't harvest it; it is only decoded on interaction.
export function EmailLink({ encoded, className, children }: EmailLinkProps) {
  const [href, setHref] = useState<string>();
  const reveal = () => setHref(`mailto:${atob(encoded)}`);

  return (
    <a
      href={href ?? "#"}
      className={className}
      onMouseEnter={reveal}
      onFocus={reveal}
      onClick={(event) => {
        event.preventDefault();
        window.location.href = `mailto:${atob(encoded)}`;
      }}
    >
      {children}
    </a>
  );
}
