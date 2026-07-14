export type FooterLink = {
  label: string;
  href: string;
};

export type ProfessionalLink = FooterLink & {
  isEnabled: boolean;
};

export const footerContact = {
  email: "mansalphasaheed@gmail.com",
  location: "Based in Sierra Leone - Working remotely worldwide",
};

export const footerLegalLinks: FooterLink[] = [
  {
    label: "Privacy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
];

export const footerAdditionalLinks: FooterLink[] = [
  {
    label: "Contact",
    href: "/contact",
  },
];

export const professionalLinks: ProfessionalLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mansaraysaheedalpha",
    isEnabled: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saheed-alpha-mansaray-aa6635309/",
    isEnabled: true,
  },
];
