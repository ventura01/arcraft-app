import {
  Dna,
  FlowerTulip,
  GlobeHemisphereWest,
  Confetti,
  BugDroid,
  Carrot,
  Coffee,
} from "@phosphor-icons/react";

export const navLinks = [
  { title: "inicio", url: "/" },
  // { title: "servicios", url: "#services" },
  { title: "soluciones", url: "#solutions" },
  { title: "testimonios", url: "#testimonials" },
  { title: "blog", url: "#blog" },
  { title: "contact", url: "/contact" },
  // { title: "info", url: "#info" },
];

export const footerLinks = [
  {
    title: "acerca",
    links: [
      { title: "preguntas frecuentes", url: "/faq" },
      { title: "centro de ayuda", url: "/help" },
      // { title: "blog", url: "/" },
      { title: "términos y condiciones", url: "/conditions" },
      { title: "política de privacidad", url: "/privacy" },
    ],
  },
  {
    title: "empresa",
    links: [
      { title: "eventos", url: "/" },
      { title: "socios comerciales", url: "/" },
      { title: "historia", url: "/" },
    ],
  },
];
export const howItWorks = {
  steps: [
    {
      number: "01",
      icon: BugDroid,
      title: "Project Initiation",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
    {
      number: "02",
      icon: Carrot,
      title: "Conceptual Design",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
    {
      number: "03",
      icon: Coffee,
      title: "Construction Documents",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
  ],
  features: [
    {
      icon: Confetti,
      title: "Design Development",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: Dna,
      title: "Construction Administration",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: FlowerTulip,
      title: "Post-Occupancy Evaluation",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: GlobeHemisphereWest,
      title: "Schematic Design",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
  ],
};
