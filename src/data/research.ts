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
    title: "B.Sc. Graduation",
    role: "Applied Computer Science and Artificial Intelligence",
    image: bachelorImage,
    alt: "Christian Bianchi at his bachelor's graduation.",
  },
  {
    slug: "ijcnn-2025",
    year: 2025,
    title: "IJCNN 2025",
    role: "Oral Presenter",
    image: conferenceImage,
    alt: "Christian Bianchi at IJCNN 2025 in Rome.",
  },
  {
    slug: "icvss-2026",
    year: 2026,
    title: "ICVSS 2026",
    role: "Selected Participant",
    image: summerSchoolImage,
    alt: "Christian Bianchi attending ICVSS 2026.",
  },
];

export const thesis: Thesis = {
  title: "Calibrating Neural Networks via Radius Regularization",
  meta: "B.Sc. Thesis, 2024",
  summary:
  "Introduced radius regularization, a geometry-aware objective that aligns predictive confidence with embedding radius to improve neural network calibration.",
  details: [
    "Evaluated on hyperbolic and Euclidean ResNet architectures across CIFAR-10, CIFAR-100, and Tiny-ImageNet.",
    "Improved calibration without post-hoc recalibration while maintaining classification accuracy.",
    "On CIFAR-100, reduced Expected Calibration Error from 0.0554 to 0.0237, a relative reduction of approximately 57%, while outperforming focal loss and label smoothing.",
  ],
  note:
    "Conceptual metric visual only; the original thesis figures are not reproduced.",
  media: {
    image: bachelorPresentation,
    alt: "Christian Bianchi presenting his bachelor's thesis.",
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
      "It formulates robotic adaptation as parameter prediction, mapping multimodal task evidence directly to task-specific LoRA updates for a frozen VLA policy without target-task action labels or test-time optimization.",    links: {
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
      "It enables long-horizon manipulation by composing reusable skill-level adaptations and dynamically activating the appropriate adapters during execution.",    links: {},
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
