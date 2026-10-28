import type { StaticImageData } from "next/image";

import resquFigure from "@/img/figure-resqu-overview.png";
import spellFigure from "@/img/figure-spell-overview.jpg";
import wizardFigure from "@/img/figure-wizard-overview.jpg";
import bachelorPresentation from "@/img/project-bachelor-thesis-presentation.jpg";
import conferenceOralImage from "@/img/project-resqu-ijcnn-2025-oral.jpg";
import wizardPoster from "@/img/project-wizard-icvss-2026-poster.jpg";

export type ResearchLinkKey = "paper" | "arxiv" | "code" | "project";

export type ResearchImageFit = "contain" | "cover";

export type ResearchMedia = {
  image?: StaticImageData;
  alt: string;
  fit: ResearchImageFit;
  // "wide" puts a landscape figure under the text at full card width instead of in the side column.
  layout?: "side" | "wide";
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
    slug: "icvss-2026",
    year: 2026,
    title: "ICVSS 2026",
    role: "Selected Participant · Poster Presenter",
    image: wizardPoster,
    alt: "Christian Bianchi presenting the WIZARD poster at ICVSS 2026.",
  },
  {
    slug: "ijcnn-2025",
    year: 2025,
    title: "IJCNN 2025",
    role: "Oral Presenter",
    image: conferenceOralImage,
    alt: "Christian Bianchi giving the ResQu oral presentation at IJCNN 2025 in Rome.",
  },
  {
    slug: "bachelor-2024",
    year: 2024,
    title: "B.Sc. Thesis Presentation",
    role: "Applied Computer Science and Artificial Intelligence",
    image: bachelorPresentation,
    alt: "Christian Bianchi presenting his bachelor's thesis.",
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
  note: "No figure; the presentation photo is used for the B.Sc. milestone instead.",
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "wizard",
    number: "01",
    acronym: "WIZARD",
    title: "Robotic Policy Adaptation via Weight-Space Meta-Learning",
    venue: "CoRL 2026 Workshop",
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
      "It formulates robotic adaptation as parameter prediction, mapping multimodal task evidence directly to task-specific LoRA updates for a frozen VLA policy without target-task action labels or test-time optimization. On held-out LIBERO-Spatial tasks it raises success from 19% for a fine-tuned π0.5 to 40%, and from 17% to 37% on a real Franka Emika Panda.",
    links: {
    arxiv: "https://arxiv.org/abs/2606.07217",
    },
    imageFit: "contain",
    featured: true,
    visual: "wizard",
    media: {
      image: wizardFigure,
      alt: "WIZARD overview: LoRA experts trained on source tasks supervise a meta-network that generates a target-task adapter for a frozen VLA policy from a new task demonstration.",
      fit: "contain",
      layout: "wide",
    },
    contextualNote:
      "Figure 1 from the arXiv paper (2606.07217).",
    relatedProjects: ["spell", "resqu"],
  },
  {
    slug: "spell",
    number: "02",
    acronym: "SPELL",
    title: "Long-Horizon Compositional Manipulation via Meta-Network Dynamic Adaptation",
    status: "Under review",
    year: 2026,
    authors: [
      "Christian Bianchi",
      "Mehdi Amlal",
      "Alessio Palma",
      "Matteo Gioia",
      "Edoardo Ensoli",
      "Alessio Sampieri",
      "Andrea Roberti",
      "Fabio Galasso",
      "Luca Franco",
    ],
    abstract:
      "SPELL is a sequential weight-space adaptation framework that generates skill-level LoRA adapters from language instructions and short visual demonstrations, dynamically activating them during long-horizon manipulation.",
    description:
      "SPELL learns a meta-network over single-skill LoRA experts that generates the adapters for each skill in a new task, switching between them during execution without target-task action labels or test-time gradient updates. It doubles held-out LIBERO-10 success (0.25 to 0.50), reaches 4.58 on CALVIN ABC→D, and improves full-sequence success on a real Franka Emika Panda from 0.31 to 0.56.",
    links: {},
    imageFit: "cover",
    featured: true,
    visual: "spell",
    media: {
      image: spellFigure,
      alt: "SPELL overview: one adapter is generated per subtask from prompt and video evidence, and the active adapter is switched when a completion signal crosses a threshold.",
      fit: "contain",
      layout: "wide",
    },
    contextualNote:
      "Figure 1 from the manuscript (under review; do not name the venue).",
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
      image: resquFigure,
      alt: "ResQu overview: quaternion wavelet (QUAVE) and timestep embeddings condition a latent diffusion U-Net through a quaternion wavelet- and time-aware encoder to produce the super-resolved image.",
      fit: "contain",
    },
    contextualNote: "Fig. 2 from the arXiv paper (2505.00334).",
    relatedProjects: ["wizard", "spell"],
  },
];

export function getProjectBySlug(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
