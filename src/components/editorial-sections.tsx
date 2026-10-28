import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { ProjectVisual } from "@/components/project-visual";
import { SocialIcon } from "@/components/social-icon";
import type { ResearchProject } from "@/data/research";

type ResearchAction = {
  href: string;
  label: string;
};

type ProjectMedia = {
  image?: StaticImageData;
  alt: string;
  fit: "contain" | "cover";
  caption?: string;
  conceptual?: boolean;
  layout?: "side" | "wide";
};

type Milestone = {
  slug: string;
  year: number | "Next";
  title: string;
  role: string;
  image?: StaticImageData;
  alt?: string;
};

type FeaturedResearchProject = ResearchProject & {
  media: ProjectMedia;
  actions: ResearchAction[];
  status: string;
};

type ArchiveEntry = {
  slug: string;
  year: number;
  title: string;
  meta: string;
  summary: string;
  authors: string[];
  actions: ResearchAction[];
  media?: ProjectMedia;
};

function getProjectActionVariant(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel === "arxiv") {
    return "arxiv";
  }

  if (normalizedLabel === "code") {
    return "github";
  }

  return "default";
}

function ProjectActionContent({ label }: { label: string }) {
  const variant = getProjectActionVariant(label);

  if (variant === "arxiv") {
    return <span className="project-action-wordmark">arXiv</span>;
  }

  if (variant === "github") {
    return <SocialIcon label="GitHub" className="project-action-github" />;
  }

  return (
    <>
      <span>{label}</span>
      <ArrowUpRight className="h-3.5 w-3.5" />
    </>
  );
}

function renderAuthors(authors: readonly string[]) {
  return authors.reduce<ReactNode[]>((acc, author, index) => {
    const isChristian = author.includes("Christian Bianchi");

    acc.push(
      isChristian ? (
        <strong key={`${author}-${index}`} className="font-semibold text-[color:var(--ink)]">
          {author}
        </strong>
      ) : (
        <span key={`${author}-${index}`}>{author}</span>
      ),
    );

    if (index < authors.length - 1) {
      acc.push(<span key={`sep-${author}-${index}`}>, </span>);
    }

    return acc;
  }, []);
}

function ProjectActions({ slug, actions }: { slug: string; actions: ResearchAction[] }) {
  if (actions.length === 0) {
    return null;
  }

  return (
    <div className="archive-actions">
      {actions.map((action) => {
        const variant = getProjectActionVariant(action.label);

        return (
          <Link
            key={`${slug}-${action.label}`}
            href={action.href}
            className={`project-action ${variant === "default" ? "" : "project-action-brand"}`.trim()}
            aria-label={variant === "default" ? undefined : action.label}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <ProjectActionContent label={action.label} />
          </Link>
        );
      })}
    </div>
  );
}

export function MilestoneItem({ item }: { item: Milestone }) {
  return (
    <li className="milestone-item">
      {item.image && item.alt ? (
        <div className="milestone-thumb">
          <Image src={item.image} alt={item.alt} className="milestone-thumb-image" />
        </div>
      ) : null}
      <div className="milestone-copy">
        <p className="milestone-year">{item.year}</p>
        <h3 className="milestone-title">{item.title}</h3>
        <p className="milestone-role">{item.role}</p>
      </div>
    </li>
  );
}

export function FeaturedProject({ project }: { project: FeaturedResearchProject }) {
  const hasProjectMedia = Boolean(project.media.image || project.media.conceptual);
  const isWide = project.media.layout === "wide";

  return (
    <article className={`archive-entry ${isWide ? "archive-entry-wide" : ""}`.trim()}>
      <div className="archive-content">
        <div className="archive-rail">
          <p className="archive-meta">{project.status}</p>
          <ProjectActions slug={project.slug} actions={project.actions} />
        </div>

        <div className="archive-body">
          <div className="project-identity">
            <div className="project-heading-stack">
              <h3 className="archive-title">{project.title}</h3>
              <p className="archive-authors">{renderAuthors(project.authors)}</p>
              <p className="archive-summary">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {hasProjectMedia ? (
        <div className="archive-media">
          <div
            className={`archive-media-frame ${project.media.conceptual ? "featured-media-conceptual" : ""}`}
          >
            {project.media.image ? (
              <Image
                src={project.media.image}
                alt={project.media.alt}
                className={project.media.fit === "contain" ? "featured-media-image-contain" : "featured-media-image-cover"}
              />
            ) : project.media.conceptual ? (
              <ProjectVisual variant={project.visual} />
            ) : null}
          </div>
          {project.media.caption ? <p className="featured-media-caption">{project.media.caption}</p> : null}
        </div>
      ) : null}
    </article>
  );
}

export function ArchiveEntryCard({ entry }: { entry: ArchiveEntry }) {
  return (
    <article className="archive-entry">
      <div className="archive-content">
        <div className="archive-rail">
          <p className="archive-meta">{entry.meta}</p>
          <ProjectActions slug={entry.slug} actions={entry.actions} />
        </div>

        <div className="archive-body">
          <h3 className="archive-title">{entry.title}</h3>
          <p className="archive-authors">{renderAuthors(entry.authors)}</p>
          <p className="archive-summary">{entry.summary}</p>
        </div>
      </div>

      {entry.media?.image ? (
        <div className="archive-media">
          <div className="archive-media-frame">
            <Image
              src={entry.media.image}
              alt={entry.media.alt}
              className={entry.media.fit === "contain" ? "featured-media-image-contain" : "featured-media-image-cover"}
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}
