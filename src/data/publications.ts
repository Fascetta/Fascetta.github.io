import type { StaticImageData } from "next/image";

import corlLogo from "@/img/logo-corl-2026.png";
import ijcnnLogo from "@/img/logo-ijcnn-2025.png";
import sapienzaLogo from "@/img/logo-sapienza-university-of-rome.png";

export type VenueLogo = {
  src: StaticImageData;
  alt: string;
  // Short qualifier shown next to the logo, e.g. "Workshop" or "Oral".
  note?: string;
};

export type Publication = {
  title: string;
  statusOrVenue: string;
  venueLogo?: VenueLogo;
  authors: string[];
  year: number;
  links: {
    paper?: string;
    arxiv?: string;
    code?: string;
    project?: string;
    bibtex?: string;
  };
};

export const publications: Publication[] = [
  {
    title: "Robotic Policy Adaptation via Weight-Space Meta-Learning",
    statusOrVenue: "CoRL 2026 Workshop",
    venueLogo: { src: corlLogo, alt: "CoRL 2026", note: "Workshop" },
    authors: [
      "Christian Bianchi",
      "Siamak Yousefi",
      "Alessio Sampieri",
      "Andrea Roberti",
      "Luca Rigazio",
      "Fabio Galasso",
      "Luca Franco",
    ],
    year: 2026,
    links: {
      arxiv: "https://arxiv.org/abs/2606.07217",
    },
  },
  {
    title: "Long-Horizon Compositional Manipulation via Meta-Network Dynamic Adaptation",
    statusOrVenue: "Preprint",
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
    year: 2026,
    links: {},
  },
  {
    title: "Quaternion Wavelet-Conditioned Diffusion Models for Image Super-Resolution",
    statusOrVenue: "IJCNN 2025 - Oral",
    venueLogo: { src: ijcnnLogo, alt: "IJCNN 2025", note: "Oral" },
    authors: ["Luigi Sigillo", "Christian Bianchi", "Aurelio Uncini", "Danilo Comminiello"],
    year: 2025,
    links: {
      arxiv: "https://arxiv.org/abs/2505.00334",
      code: "https://www.github.com/Fascetta/ResQu",
    },
  },
  {
    title: "Calibrating Neural Networks via Radius Regularization",
    statusOrVenue: "B.Sc. Thesis 2024",
    venueLogo: { src: sapienzaLogo, alt: "Sapienza University of Rome", note: "B.Sc. Thesis" },
    authors: ["Christian Bianchi"],
    year: 2024,
    links: {
      code: "https://github.com/Fascetta/Radius-Regularization",
    },
  },
];
