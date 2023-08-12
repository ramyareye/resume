export const labels = {
  contact: "Contact",
  experiences: "Experiences",
  about: "tldr;",
  skills: "Skills",
  projects: "Projects",
  opensource: "Open Source Projects",

  years_old: "yo",
  living: "currently in",
  now: "Present",
  summary: "Summary",
  highlight: "Highlight",

  human: "Human",
  languages: "Languages",
  machine: "Computers",

  availability: "Availability",
  technicity: "Technicity",
  anticipation: "Anticipation",
  reactivity: "Reactivity",
  communication: "Communication",

  javascript: "JavaScript, TypeScript",
  node: "Node, Express",
  htmlcss: "HTML, CSS",
  php: "PHP, Laravel",
  react: "React, Next.js",
  reactnative: "React Native, Expo",
  git: "Git",
  vuejs: "Vue.js",
  monorepos: "Monorepos, Lerna, Turbo",
  cicd: "CI/CD, Github Actions",

  linux: "Linux",
  docker: "Docker",
  aws: "AWS/CW",
  mysql: "Mysql, PostgreSQL",

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
