import type { StaticImageData } from "next/image";

import algLogo from "@/img/logo-autonomous-learning-group.png";
import arxivLogo from "@/img/logo-arxiv.svg";
import corlLogo from "@/img/logo-corl-2026.png";
import icvssLogo from "@/img/logo-icvss-2026.png";
import ijcnnLogo from "@/img/logo-ijcnn-2025.png";
import italaiLogo from "@/img/logo-italai.jpg";

export type NewsItem = {
  date: string;
  text: string;
  href?: string;
  logo?: StaticImageData;
  logoAlt?: string;
};

// Newest first. Keep entries in neutral wording so they don't go stale.
export const news: NewsItem[] = [
  {
    date: "Nov 2026",
    text: "WIZARD poster at the CoRL 2026 Workshop, Austin.",
    logo: corlLogo,
    logoAlt: "CoRL 2026 logo.",
  },
  {
    date: "Sep 2026",
    text: "Started my M.Sc. thesis in the Autonomous Learning Group at the University of Tübingen.",
    logo: algLogo,
    logoAlt: "Autonomous Learning Group logo.",
  },
  {
    date: "Jul 2026",
    text: "Presented the WIZARD poster at ICVSS 2026, Sicily.",
    logo: icvssLogo,
    logoAlt: "ICVSS 2026 logo.",
  },
  {
    date: "Jun 2026",
    text: "WIZARD preprint released on arXiv.",
    href: "https://arxiv.org/abs/2606.07217",
    logo: arxivLogo,
    logoAlt: "arXiv logo.",
  },
  {
    date: "Jul 2025",
    text: "Oral presentation of ResQu at IJCNN 2025, Rome.",
    href: "https://arxiv.org/abs/2505.00334",
    logo: ijcnnLogo,
    logoAlt: "IJCNN 2025 logo.",
  },
  {
    date: "Jun 2025",
    text: "Joined ItalAI as an R&D Scientist.",
    logo: italaiLogo,
    logoAlt: "ItalAI logo.",
  },
];
