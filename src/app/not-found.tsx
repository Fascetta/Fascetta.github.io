import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-1 items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">Project not found.</h1>
          <p className="mt-4 text-base leading-7 text-[color:var(--soft-ink)]">
            The requested page does not exist in the current research index.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--surface-strong)]"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  );
}
