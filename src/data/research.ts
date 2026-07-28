import type { StaticImageData } from "next/image";

import bachelorImage from "@/img/milestone-bachelor-thesis-2024.jpg";
import bachelorPresentation from "@/img/project-bachelor-thesis-presentation.jpg";
import conferenceImage from "@/img/milestone-ijcnn-2025.png";
import conferenceOralImage from "@/img/project-resqu-ijcnn-2025-oral.jpg";
import summerSchoolImage from "@/img/milestone-icvss-2026.png";
import wizardPoster from "@/img/project-wizard-icvss-2026-poster.png";

export type ResearchLinkKey = "paper" | "arxiv" | "code" | "project";

export type ResearchImageFit = "contain" | "cover";

export type ResearchMedia = {
  image?: StaticImageData;
  alt: string;
  fit: ResearchImageFit;
};

export type ResearchProject = {
  slug: string;
  number: string;
  acronym: string;
  title: string;
  status?: string;
  venue?: string;
  year: number;
  authors: string[];
  abstract: string;
  description: string;
  links: Partial<Record<ResearchLinkKey, string>>;
  featured: boolean;
  visual: "wizard" | "spell" | "resqu";
  imageFit?: ResearchImageFit;
  media?: ResearchMedia;
  contextualNote: string;
  relatedProjects: string[];
};

export type AcademicActivity = {
  slug: "bachelor-2024" | "ijcnn-2025" | "icvss-2026";
  year: number | "Next";
  title: string;
  role: string;
  image?: StaticImageData;
  alt?: string;
  placeholder?: boolean;
};

export type Thesis = {
  title: string;
  meta: string;
  summary: string;
  details: string[];
  note: string;
  media?: ResearchMedia;
};

export const academicActivities: AcademicActivity[] = [
  {
    slug: "bachelor-2024",
    year: 2024,
    title: "Bachelor Degree 2024",
    role: "Graduate in ACSAI",
    image: bachelorImage,
    alt: "Bachelor image from Bachelor 2024",
  },
  {
    slug: "ijcnn-2025",
    year: 2025,
    title: "IJCNN 2025",
    role: "Oral Presentation",
    image: conferenceImage,
    alt: "Conference image from IJCNN 2025.",
  },
  {
    slug: "icvss-2026",
    year: 2026,
    title: "ICVSS 2026",
    role: "Selected Participant",
    image: summerSchoolImage,
    alt: "Participation image from ICVSS 2026.",
  },
];

export const thesis: Thesis = {
  title: "Calibrating Neural Networks via Radius Regularization",
  meta: "B.Sc. Thesis, 2024",
  summary:
    "Introduced a radius regularization objective for uncertainty estimation in hyperbolic latent spaces.",
  details: [
    "Evaluated across hyperbolic and Euclidean ResNet architectures on CIFAR-10, CIFAR-100, and Tiny-ImageNet.",
    "Reduced Expected Calibration Error by approximately 50% while preserving inference efficiency.",
    "On CIFAR-100, Expected Calibration Error decreased from 0.0554 to 0.0237 while maintaining classification accuracy and outperforming focal loss and label smoothing.",
  ],
  note:
    "Conceptual metric visual only. This site does not reproduce the original thesis figures.",
  media: {
    image: bachelorPresentation,
    alt: "Christian Bianchi presenting his bachelor thesis.",
    fit: "cover",
  },
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "wizard",
    number: "01",
    acronym: "WIZARD",
    title: "Robotic Policy Adaptation via Weight-Space Meta-Learning",
    status: "Under review",
    venue: "arXiv:2606.07217",
    year: 2026,
    authors: [
      "Christian Bianchi",
      "Siamak Yousefi",
      "Alessio Sampieri",
      "Andrea Roberti",
      "Luca Rigazio",
      "Fabio Galasso",
      "Luca Franco",
    ],
    abstract:
      "WIZARD is a weight-space meta-learning framework that generates task-specific LoRA adaptations for frozen vision-language-action policies from language instructions and short demonstration videos.",
    description:
      "It reframes robotic adaptation as parameter inference, mapping multimodal task evidence directly to low-rank policy updates for a frozen VLA model without task-specific fine-tuning.",
    links: {
      arxiv: "https://arxiv.org/abs/2606.07217",
    },
    imageFit: "contain",
    featured: true,
    visual: "wizard",
    media: {
      image: wizardPoster,
      alt: "WIZARD poster presented at ICVSS 2026.",
      fit: "contain",
    },
    contextualNote:
      "Abstract visual only. The site placeholder is inspired by task embeddings, generated LoRA updates, and structured traversal through policy weight space.",
    relatedProjects: ["spell", "resqu"],
  },
  {
    slug: "spell",
    number: "02",
    acronym: "SPELL",
    title: "Long-Horizon Compositional Manipulation via Meta-Network Dynamic Adaptation",
    status: "Under review",
    year: 2026,
    authors: ["Christian Bianchi et al."],
    abstract:
      "SPELL is a sequential weight-space adaptation framework that generates skill-level LoRA adapters from language instructions and short visual demonstrations, dynamically activating them during long-horizon manipulation.",
    description:
      "It proposes a compositional weight-space framework for decomposing robotic manipulation tasks into reusable atomic skills and dynamically adapting them during execution.",
    links: {},
    imageFit: "cover",
    featured: true,
    visual: "spell",
    media: {
      alt: "Conceptual visualization for SPELL showing skill modules, sequential activation, and long-horizon capability composition.",
      fit: "cover",
    },
    contextualNote:
      "Abstract visual only. The graphic language is intentionally related to WIZARD to frame both projects as part of one research program.",
    relatedProjects: ["wizard", "resqu"],
  },
  {
    slug: "resqu",
    number: "03",
    acronym: "ResQu",
    title: "Quaternion Wavelet-Conditioned Diffusion Models for Image Super-Resolution",
    venue: "IJCNN 2025 - Oral",
    year: 2025,
    authors: ["Luigi Sigillo", "Christian Bianchi", "Aurelio Uncini", "Danilo Comminiello"],
    abstract:
      "ResQu is a super-resolution framework that integrates quaternion wavelet preprocessing with latent diffusion through a quaternion wavelet- and time-aware encoder.",
    description:
      "It leverages Stable Diffusion priors while dynamically injecting quaternion wavelet embeddings at different denoising stages to improve structural fidelity and perceptual quality.",
    links: {},
    imageFit: "contain",
    featured: false,
    visual: "resqu",
    media: {
      image: conferenceOralImage,
      alt: "ResQu oral presentation poster at IJCNN 2025.",
      fit: "contain",
    },
    contextualNote:
      "Abstract visual only. The placeholder suggests staged denoising, wavelet structure, and diffusion conditioning rather than reproducing paper figures.",
    relatedProjects: ["wizard", "spell"],
  },
];

export function getProjectBySlug(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
