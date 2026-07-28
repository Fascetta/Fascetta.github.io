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
};

type Milestone = {
  slug: string;
  year: number | "Next";
  title: string;
  role: string;
  image?: StaticImageData;
  alt?: string;
  placeholder?: boolean;
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
  media: ProjectMedia;
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

export function MilestoneCard({ item }: { item: Milestone }) {
  return (
    <article className={`milestone-card ${item.placeholder ? "milestone-card-placeholder" : ""}`}>
      <div className={`milestone-media ${item.placeholder ? "milestone-media-placeholder" : ""}`}>
        {item.image && item.alt ? (
          <Image src={item.image} alt={item.alt} className="milestone-image" />
        ) : (
          <div className="milestone-placeholder-art" aria-hidden="true">
            <span className="milestone-placeholder-dot milestone-placeholder-dot-a" />
            <span className="milestone-placeholder-dot milestone-placeholder-dot-b" />
            <span className="milestone-placeholder-line milestone-placeholder-line-a" />
            <span className="milestone-placeholder-line milestone-placeholder-line-b" />
            <span className="milestone-placeholder-chip">Coming soon</span>
          </div>
        )}
      </div>
      <div className="milestone-body">
        <p className="milestone-year">{item.year}</p>
        <h3 className="milestone-title">{item.title}</h3>
        <p className="milestone-role">{item.role}</p>
      </div>
    </article>
  );
}

export function FeaturedProject({ project }: { project: FeaturedResearchProject }) {
  const hasProjectMedia = Boolean(project.media.image || project.media.conceptual);

  return (
    <article className="archive-entry">
      <div className="archive-content">
        <div className="archive-rail">
          <p className="archive-meta">{project.status}</p>
        </div>

        <div className="archive-body">
          <div className="project-identity">
            <div className="project-heading-stack">
              <h3 className="archive-title">{project.title}</h3>
              <p className="archive-authors">{renderAuthors(project.authors)}</p>
              <p className="archive-summary">{project.description}</p>
            </div>
          </div>

          <div className="project-meta-row">
            {project.actions.length > 0 ? (
              <div className="archive-actions">
                {project.actions.map((action) => {
                  const variant = getProjectActionVariant(action.label);

                  return (
                    <Link
                      key={`${project.slug}-${action.label}`}
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
            ) : null}
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
        </div>

        <div className="archive-body">
          <h3 className="archive-title">{entry.title}</h3>
          <p className="archive-authors">{renderAuthors(entry.authors)}</p>
          <p className="archive-summary">{entry.summary}</p>

          {entry.actions.length > 0 ? (
            <div className="archive-actions">
              {entry.actions.map((action) => {
                const variant = getProjectActionVariant(action.label);

                return (
                  <Link
                    key={`${entry.slug}-${action.label}`}
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
          ) : null}
        </div>
      </div>

      <div className="archive-media">
        <div className="archive-media-frame">
          <Image
            src={entry.media.image!}
            alt={entry.media.alt}
            className={entry.media.fit === "contain" ? "featured-media-image-contain" : "featured-media-image-cover"}
          />
        </div>
      </div>
    </article>
  );
}
