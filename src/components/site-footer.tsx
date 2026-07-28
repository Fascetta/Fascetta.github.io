import Link from "next/link";

import { SocialIcon } from "@/components/social-icon";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-3 border-t border-[color:var(--line)] pt-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[color:var(--muted)]">
            <span className="font-semibold tracking-tight text-[color:var(--ink)]">{profile.name}</span>
            {" · "}
            <span>Adaptive &amp; Multimodal AI</span>
            {" · "}
            <span>Designed and built with intention</span>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--muted)]">
            {profile.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--ink)] focus-visible:text-[color:var(--ink)]"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon label={link.label} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
