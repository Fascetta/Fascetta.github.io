export type Publication = {
  title: string;
  statusOrVenue: string;
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
    statusOrVenue: "arXiv:2606.07217",
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
    authors: ["Christian Bianchi et al."],
    year: 2026,
    links: {},
  },
  {
    title: "Quaternion Wavelet-Conditioned Diffusion Models for Image Super-Resolution",
    statusOrVenue: "IJCNN 2025 - Oral",
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
    authors: ["Christian Bianchi"],
    year: 2024,
    links: {
      code: "https://github.com/Fascetta/Radius-Regularization",
    },
  },
];
