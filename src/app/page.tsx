import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { ArchiveEntryCard, FeaturedProject, MilestoneCard } from "@/components/editorial-sections";
import { SiteFooter } from "@/components/site-footer";
import { SocialIcon } from "@/components/social-icon";
import { currentResearchDirections, experience } from "@/data/experience";
import { publications } from "@/data/publications";
import { profile, type EducationInstitution } from "@/data/profile";
import {
  academicActivities,
  getProjectBySlug,
  type ResearchMedia,
  type ResearchLinkKey,
  type ResearchProject,
  thesis,
} from "@/data/research";
import { siteConfig } from "@/data/site";
import profileImage from "@/img/portrait-christian-bianchi.png";

type ResearchAction = {
  href: string;
  label: string;
};

type ArchiveEntry = {
  slug: string;
  year: number;
  title: string;
  meta: string;
  summary: string;
  authors: string[];
  actions: ResearchAction[];
  media: ResearchMedia;
};

type EducationCard = (typeof profile.education)[number];

function EducationInstitutionLogo({ institution }: { institution: EducationInstitution }) {
  const content = institution.logo ? (
    <Image src={institution.logo} alt={institution.logoAlt ?? institution.name} className="org-logo-image" />
  ) : (
    <div className="org-logo-placeholder">
      <span>{institution.name.slice(0, 2)}</span>
    </div>
  );

  if (institution.href) {
    return (
      <Link href={institution.href} className="timeline-org-link hero-education-logo-link" target="_blank" rel="noreferrer">
        <div className="org-logo-frame hero-education-logo-frame">{content}</div>
      </Link>
    );
  }

  return <div className="org-logo-frame hero-education-logo-frame">{content}</div>;
}

function PersonSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    jobTitle: profile.role
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

function LinkList() {
  const orderedLinks = [...profile.socialLinks].sort(
    (left, right) =>
      (left.heroOrder ?? Number.POSITIVE_INFINITY) - (right.heroOrder ?? Number.POSITIVE_INFINITY),
  );

  return (
    <div className="hero-link-list">
      {orderedLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="hero-secondary-link"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon label={item.label} />
          {item.label === "Scholar" ? "Google Scholar" : item.label}
        </Link>
      ))}
    </div>
  );
}

function getLinkLabel(key: ResearchLinkKey) {
  return {
    paper: "Paper",
    arxiv: "arXiv",
    code: "Code",
    project: "Project",
  }[key];
}

function getProjectActions(project: ResearchProject, projectRoutes: Set<string>) {
  const publication = publications.find((item) => item.title === project.title);
  const mergedLinks = {
    ...publication?.links,
    ...project.links,
  } as Partial<Record<ResearchLinkKey, string>>;

  const actions: ResearchAction[] = [];

  if (mergedLinks.paper) {
    actions.push({ href: mergedLinks.paper, label: getLinkLabel("paper") });
  }
  if (mergedLinks.arxiv) {
    actions.push({ href: mergedLinks.arxiv, label: getLinkLabel("arxiv") });
  }
  if (mergedLinks.code) {
    actions.push({ href: mergedLinks.code, label: getLinkLabel("code") });
  }
  if (mergedLinks.project && projectRoutes.has(project.slug)) {
    actions.push({ href: mergedLinks.project, label: getLinkLabel("project") });
  }
  return {
    actions,
    status: publication?.statusOrVenue ?? [project.status, project.venue].filter(Boolean).join(" · "),
  };
}

export default function HomePage() {
  const trajectory = experience
    .filter(
      (
        item,
      ): item is (typeof experience)[number] & {
        trajectoryTone: NonNullable<(typeof experience)[number]["trajectoryTone"]>;
      } => Boolean(item.trajectoryTone),
    )
    .map((item) => ({
      item,
      tone: item.trajectoryTone,
    }));

  const heroEducation = [...profile.education]
    .filter(
      (item): item is EducationCard =>
        item.heroOrder !== undefined &&
        item.institutions.length > 0,
    )
    .sort((left, right) => (left.heroOrder ?? Number.POSITIVE_INFINITY) - (right.heroOrder ?? Number.POSITIVE_INFINITY));
  const projectRoutes = new Set<string>();
  const selectedMilestones = academicActivities;

  const featuredResearch = ["spell", "wizard"]
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ResearchProject => Boolean(project))
    .map((project) => ({
      ...project,
      media: project.media!,
      ...getProjectActions(project, projectRoutes),
    }));

  const resquProject = getProjectBySlug("resqu");
  const resquPublication = publications.find((item) => item.title === resquProject?.title);
  const thesisPublication = publications.find((item) => item.title === thesis.title);

  const archiveEntries: ArchiveEntry[] = [];

  if (resquProject) {
    archiveEntries.push({
      slug: resquProject.slug,
      year: resquProject.year,
      title: resquProject.title,
      meta: resquPublication?.statusOrVenue ?? resquProject.venue ?? "Research project",
      summary: resquProject.description,
      authors: [...resquProject.authors],
      actions: getProjectActions(resquProject, projectRoutes).actions,
      media: resquProject.media!,
    });
  }

  archiveEntries.push({
    slug: "thesis",
    year: 2024,
    title: thesis.title,
    meta: thesis.meta,
    summary: thesis.summary,
    authors: ["Christian Bianchi"],
    actions: thesisPublication?.links.code ? [{ href: thesisPublication.links.code, label: "Code" }] : [],
    media: thesis.media!,
  });

  return (
    <>
      <PersonSchema />
      <main className="px-4 pb-6 pt-3 sm:px-6 lg:px-8">
        <section id="about" className="hero-shell mx-auto w-full max-w-[96rem]">
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-orb hero-orb-c" />

          <div className="landing-deck">
            <div className="landing-hero">
              <article className="neo-panel landing-intro">
                <div className="hero-intro-main">
                  <p className="hero-name">{profile.name}</p>

                  <p className="hero-role profile-summary-role hero-subtitle">{profile.role}</p>

                  <div className="profile-summary hero-intro-copy">
                    <p className="profile-summary-copy">{profile.about.slice(0, 2).join(" ")}</p>
                  </div>

                  <div className="hero-education-grid">
                    {heroEducation.map((item) => {
                      const [leftInstitution, rightInstitution] = item.institutions;
                      const isSplitCard = item.institutions.length > 1;

                      return (
                        <article
                          key={`${item.degree}-${item.period}`}
                          className={`hero-education-card ${isSplitCard ? "hero-education-card-split" : ""}`}
                        >
                          {leftInstitution ? (
                            <div className="hero-education-logo-slot hero-education-logo-slot-left" aria-hidden="true">
                              <EducationInstitutionLogo institution={leftInstitution} />
                            </div>
                          ) : null}

                          <div className="hero-education-copy min-w-0">
                            <div className="timeline-topline hero-education-topline">
                              <p className="hero-education-heading">{item.degree}</p>
                            </div>
                            <p className="hero-education-institutions">{item.period}</p>
                          </div>

                          {isSplitCard && rightInstitution ? (
                            <div className="hero-education-logo-slot hero-education-logo-slot-right" aria-hidden="true">
                              <EducationInstitutionLogo institution={rightInstitution} />
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>

                  <div className="hero-social-links">
                    <LinkList />
                  </div>

                  <Link href="/#research" className="hero-primary-action hero-primary-action-corner">
                    Explore research
                    <ArrowDownRight className="h-4 w-4" />
                  </Link>

                  <div className="profile-head hero-profile-head">
                    <div className="profile-frame">
                      <Image src={profileImage} alt="Portrait of Christian Bianchi." className="profile-image" priority />
                    </div>
                  </div>
                </div>
              </article>

              <article className="neo-panel overview-panel experience-panel">
                <div className="section-heading">
                  <p className="eyebrow">Experience</p>
                </div>
                <div className="trajectory-flow">
                  {trajectory.map(({ item, tone }) => {
                    return (
                      <div key={`${item.organization}-${item.role}`} className={`timeline-row ${tone}`}>
                        {item.href ? (
                          <Link href={item.href} className="timeline-org-link" target="_blank" rel="noreferrer">
                            {item.logo ? (
                              <div className="org-logo-frame">
                                <Image src={item.logo} alt={item.logoAlt!} className="org-logo-image" />
                              </div>
                            ) : (
                              <div className="org-logo-placeholder">
                                <span>{item.organization.slice(0, 2)}</span>
                              </div>
                            )}
                          </Link>
                        ) : item.logo ? (
                          <div className="org-logo-frame">
                            <Image src={item.logo} alt={item.logoAlt!} className="org-logo-image" />
                          </div>
                        ) : (
                          <div className="org-logo-placeholder">
                            <span>{item.organization.slice(0, 2)}</span>
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="timeline-topline">
                            <p className="timeline-org">
                              {item.href ? (
                                <Link href={item.href} className="timeline-title-link" target="_blank" rel="noreferrer">
                                  {item.organization}
                                </Link>
                              ) : (
                                item.organization
                              )}
                            </p>
                            <p className="timeline-period">{item.period}</p>
                          </div>
                          <p className="timeline-role">
                            {item.role}
                            {item.group ? <span className="timeline-separator">|</span> : null}
                            {item.group ? <span>{item.group}</span> : null}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>

            <div className="landing-overview">
              <article className="neo-panel overview-panel directions-panel">
                <div className="section-heading">
                  <p className="eyebrow">Current interests</p>
                </div>
                <div className="directions-grid">
                  {currentResearchDirections.map((item) => (
                    <div key={item.title} className="direction-item">
                      <div className="direction-body">
                        <h2 className="direction-title">{item.title}</h2>
                        <p className="direction-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="neo-panel overview-panel hero-milestones-panel">
                <div className="section-heading">
                  <p className="eyebrow">Milestones</p>
                </div>
                <div className="milestone-grid hero-milestones-grid">
                  {selectedMilestones.map((item) => (
                    <MilestoneCard key={item.slug} item={item} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="editorial-shell mx-auto w-full max-w-[96rem]">
          <section
            id="research"
            className="editorial-section editorial-section-research research-section neo-panel overview-panel research-panel"
          >
            <div className="editorial-section-head">
              <div className="space-y-2">
                <h2 className="section-title research-section-title">Selected Research</h2>
              </div>
            </div>

            <div className="research-list">
              <div className="research-grid">
                {featuredResearch.map((project) => (
                  <FeaturedProject
                    key={project.slug}
                    project={project}
                  />
                ))}
              </div>

              <div className="archive-grid">
                {archiveEntries.map((entry) => (
                  <ArchiveEntryCard key={entry.slug} entry={entry} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
