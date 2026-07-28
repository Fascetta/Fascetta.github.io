import type { StaticImageData } from "next/image";

import algLogo from "@/img/logo-autonomous-learning-group.png";
import f1Logo from "@/img/logo-f1-consulting-services.png";
import hclLogo from "@/img/logo-hcl-software.png";
import ispammLogo from "@/img/logo-ispamm.png";
import italaiLogo from "@/img/logo-italai.jpg";
import pinlabLogo from "@/img/logo-pinlab.png";

export type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  location: string;
  group?: string;
  href?: string;
  supervisor?: {
    name: string;
    href: string;
  };
  details?: string[];
  trajectoryTone?:
    | "trajectory-academia"
    | "trajectory-research"
    | "trajectory-industry-soft"
    | "trajectory-industry";
  logo?: StaticImageData;
  logoAlt?: string;
};

export const experience: ExperienceItem[] = [
  {
    organization: "Autonomous Learning Group",
    role: "Incoming Erasmus+ Researcher",
    period: "Sep 2026 - May 2027",
    location: "Tübingen, Germany",
    href: "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/distributed-intelligence/home/",
    supervisor: {
      name: "Georg Martius",
      href: "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/distributed-intelligence/team/prof-dr-georg-martius/",
    },
    trajectoryTone: "trajectory-academia",
    logo: algLogo,
    logoAlt: "Autonomous Learning Group logo.",
  },
  {
    organization: "ItalAI",
    role: "R&D Scientist",
    period: "Jun 2025 - Present",
    location: "Rome, Italy",
    href: "https://italailabs.com/",
    trajectoryTone: "trajectory-research",
    logo: italaiLogo,
    logoAlt: "ItalAI logo.",
  },
  {
    organization: "PINlab",
    role: "Research collaborator",
    period: "Apr 2024 - Present",
    location: "Rome, Italy",
    href: "https://www.pinlab.org/",
    supervisor: {
      name: "Fabio Galasso",
      href: "https://fgalasso.bitbucket.io/",
    },
    trajectoryTone: "trajectory-academia",
    logo: pinlabLogo,
    logoAlt: "PINlab logo.",
  },
  {
    organization: "ISPAMM Laboratory",
    role: "Research collaborator",
    period: "Dec 2024 - Mar 2025",
    location: "Rome, Italy",
    href: "https://sites.google.com/uniroma1.it/ispamm/",
    supervisor: {
      name: "Danilo Comminiello",
      href: "https://sites.google.com/uniroma1.it/danilocomminiello/home",
    },
    trajectoryTone: "trajectory-academia",
    logo: ispammLogo,
    logoAlt: "ISPAMM laboratory logo.",
  },
  {
    organization: "F1 Consulting Services",
    role: "Generative AI Engineer",
    period: "Mar 2025 - Jun 2025",
    location: "Rome, Italy",
    trajectoryTone: "trajectory-industry-soft",
    logo: f1Logo,
    logoAlt: "F1 Consulting Services logo.",
  },
  {
    organization: "HCL Software",
    role: "Software Engineer II",
    period: "May 2022 - Mar 2025",
    location: "Rome, Italy",
    trajectoryTone: "trajectory-industry",
    logo: hclLogo,
    logoAlt: "HCL Software logo.",
  },
];

export const currentResearchDirections = [
  {
    title: "Adaptive Multimodal Policies",
    description:
      "Studying how multimodal policies can specialize to new tasks and environments without repeated full-model retraining.",
  },
  {
    title: "Weight-Space Composition",
    description:
      "Exploring whether independently learned capabilities can be recombined directly in parameter space.",
  },
  {
    title: "Robust Generalization",
    description:
      "Analyzing failure modes and evaluation protocols for multimodal systems under distribution shift.",
  },
  {
    title: "Embodied Learning Systems",
    description:
      "Investigating adaptation, grounding, and control in embodied agents that integrate vision, language, and demonstration signals.",
  },
];
