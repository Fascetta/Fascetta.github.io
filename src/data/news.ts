export type NewsItem = {
  date: string;
  text: string;
  href?: string;
};

// Newest first. Keep entries in neutral wording so they don't go stale.
export const news: NewsItem[] = [
  {
    date: "Nov 2026",
    text: "WIZARD poster at the CoRL 2026 Workshop, Austin.",
  },
  {
    date: "Sep 2026",
    text: "Started my M.Sc. thesis in the Autonomous Learning Group at MPI-IS and the University of Tübingen.",
  },
  {
    date: "Jul 2026",
    text: "Presented the WIZARD poster at ICVSS 2026, Sicily.",
  },
  {
    date: "Jun 2026",
    text: "WIZARD preprint released on arXiv.",
    href: "https://arxiv.org/abs/2606.07217",
  },
  {
    date: "Jul 2025",
    text: "Oral presentation of ResQu at IJCNN 2025, Rome.",
    href: "https://arxiv.org/abs/2505.00334",
  },
  {
    date: "Jun 2025",
    text: "Joined ItalAI as an R&D Scientist.",
  },
];
