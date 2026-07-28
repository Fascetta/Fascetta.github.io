import Link from "next/link";

export function SiteHeader() {
  const lastUpdated = "July 28, 2026";

  return (
    <header className="site-header px-4 pt-4 sm:px-6 lg:px-8">
      <div className="site-header-inner mx-auto flex w-full max-w-[96rem] items-center justify-between gap-4 px-1 py-3">
        <Link href="/" className="site-brand group">
          <span className="site-brand-copy">
            <span className="site-brand-name">Portfolio</span>
            <span className="site-header-updated">| Last updated {lastUpdated}</span>
          </span>
        </Link>
        <div className="site-header-meta">
          <nav aria-label="Primary" className="site-nav">
            <Link href="/#about" className="site-nav-link">
              About
            </Link>
            <Link href="/#research" className="site-nav-link">
              Research
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
