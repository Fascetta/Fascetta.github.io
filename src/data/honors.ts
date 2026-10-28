import type { StaticImageData } from "next/image";

import afsLogo from "@/img/logo-afs.svg";
import hclLogo from "@/img/logo-hcl-software.png";
import icvssLogo from "@/img/logo-icvss-2026.png";
import ijcnnLogo from "@/img/logo-ijcnn-2025.png";
import ijcnn2027Logo from "@/img/logo-ijcnn-2027.png";
import leadTheFutureLogo from "@/img/logo-leadthefuture.svg";
import mlssLogo from "@/img/logo-mlss-2026.png";
import sapienzaLogo from "@/img/logo-sapienza-university-of-rome.png";
import tubingenLogo from "@/img/logo-university-of-tuebingen.png";

export type HonorItem = {
  title: string;
  subtitle?: string;
  year: number;
  logo?: StaticImageData;
  logoAlt?: string;
};

export const honors: HonorItem[] = [
  {
    title: "Reviewer",
    subtitle: "International Joint Conference on Neural Networks (IJCNN)",
    year: 2027,
    logo: ijcnn2027Logo,
    logoAlt: "IJCNN 2027 logo.",
  },
  {
    title: "Selected Participant",
    subtitle: "Machine Learning Summer School (MLSS), Tübingen",
    year: 2026,
    logo: mlssLogo,
    logoAlt: "MLSS 2026 logo.",
  },
  {
    title: "Selected Participant",
    subtitle: "International Computer Vision Summer School (ICVSS), Sicily",
    year: 2026,
    logo: icvssLogo,
    logoAlt: "ICVSS 2026 logo.",
  },
  {
    title: "Erasmus+ Research Mobility",
    subtitle: "Research stay at the Autonomous Learning Group, MPI-IS and University of Tübingen",
    year: 2026,
    logo: tubingenLogo,
    logoAlt: "University of Tübingen logo.",
  },
  {
    title: "Honours Programme",
    subtitle: "M.Sc. in Computer Science, Sapienza University of Rome",
    year: 2026,
    logo: sapienzaLogo,
    logoAlt: "Sapienza University of Rome logo.",
  },
  {
    title: "Selected Mentee",
    subtitle: "LeadTheFuture, Class of 2027",
    year: 2026,
    logo: leadTheFutureLogo,
    logoAlt: "LeadTheFuture logo.",
  },
  {
    title: "Oral Presentation",
    subtitle: "IJCNN 2025 for ResQu: Quaternion Wavelet-Conditioned Diffusion Models for Image Super-Resolution",
    year: 2025,
    logo: ijcnnLogo,
    logoAlt: "IJCNN 2025 logo.",
  },
  {
    title: "HCL Software Maverick Award",
    subtitle: "One of four recipients worldwide",
    year: 2024,
    logo: hclLogo,
    logoAlt: "HCL Software logo.",
  },
  {
    title: "Full Study-Abroad Scholarship",
    subtitle: "Sole recipient among 2,000+ applicants",
    year: 2019,
    logo: afsLogo,
    logoAlt: "AFS Intercultural Programs logo.",
  },
];
