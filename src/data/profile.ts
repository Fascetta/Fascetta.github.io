import type { StaticImageData } from "next/image";

import sapienzaLogo from "@/img/logo-sapienza-university-of-rome.png";
import tubingenLogo from "@/img/logo-university-of-tuebingen.png";

export type SocialLinkLabel = "GitHub" | "Scholar" | "LinkedIn";

export type SocialLink = {
  label: SocialLinkLabel;
  href: string;
  heroOrder?: number;
};

export type EducationInstitution = {
  name: string;
  href?: string;
  logo?: StaticImageData;
  logoAlt?: string;
};

export type EducationItem = {
  degree: string;
  period: string;
  note: string;
  institutions: EducationInstitution[];
  heroOrder?: number;
};

export const profile = {
  name: "Christian Bianchi",
  role: "Researcher in Adaptive & Multimodal AI",
  about: [
    "I am an M.Sc. student in Computer Science at Sapienza University of Rome and an R&D Scientist at ItalAI, working on adaptive and multimodal artificial intelligence.",
    "My research investigates how learning systems can adapt and recombine previously acquired capabilities as tasks, environments, and interaction dynamics change.",
    "At Sapienza, I work under the supervision of Fabio Galasso on multimodal learning, model adaptation, and generalization.",
    "At ItalAI, I lead and contribute to research on weight-space adaptation, model composition, multimodal learning, and robust evaluation under distribution shift.",
    "From September 2026 to May 2027, I will undertake an Erasmus+ research stay in the Autonomous Learning Lab at the University of Tübingen, where I will conduct my master's thesis under the co-supervision of Georg Martius and Fabio Galasso."
  ],
  education: [
    {
      degree: "B.Sc. in Applied C.S. and AI",
      period: "2021 - 2024",
      note: "Thesis: Calibrating Neural Networks via Radius Regularization.",
      heroOrder: 1,
      institutions: [
        {
          name: "Sapienza University of Rome",
          href: "https://www.uniroma1.it/it/",
          logo: sapienzaLogo,
          logoAlt: "Sapienza University of Rome logo.",
        },
      ],
    },
    {
      degree: "M.Sc. in Computer Science",
      period: "2025 - 2027",
      note: "Master's studies at Sapienza University of Rome with an Erasmus+ research visit at the University of Tübingen.",
      heroOrder: 2,
      institutions: [
        {
          name: "Sapienza University of Rome",
          href: "https://www.uniroma1.it/it/",
          logo: sapienzaLogo,
          logoAlt: "Sapienza University of Rome logo.",
        },
        {
          name: "University of Tübingen",
          href: "https://uni-tuebingen.de/",
          logo: tubingenLogo,
          logoAlt: "University of Tübingen logo.",
        },
      ],
    },
  ] satisfies EducationItem[],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Fascetta",
      heroOrder: 1,
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=RYcjd98AAAAJ&hl=en",
      heroOrder: 2,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/christianbianchiit/",
      heroOrder: 3,
    },
  ] satisfies SocialLink[],
} as const;
