export const labels = {
  contact: "Contact",
  experiences: "Experiences",
  about: "tldr;",
  skillsets: "Skillsets",

  years_old: "yo",
  living: "currently in",
  now: "now",
  summary: "Summary",
  highlight: "Highlight",

  human: "Human",
  languages: "Programming",
  machine: "Computers",

  availability: "Availability",
  technicity: "Technicity",
  anticipation: "Anticipation",
  reactivity: "Reactivity",
  communication: "Communication",

  // typescript: "Typescript",
  javascript: "JS/TS/Node",
  htmlcss: "HTML/CSS",
  php: "PHP",
  react: "React/Next.js",
  reactnative: "React Native/Expo",

  linux: "Linux",
  docker: "Docker",
  cloud: "Cloud",
  aws: "AWS",

  english: "English",
  persian: "Persian",
};

export type Label = keyof typeof labels;

export function isLabel(label: string): label is Label {
  return label in labels;
}

export function t(label: string, defaultValue = label) {
  return isLabel(label) ? labels[label] : defaultValue;
}

export function cap(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
