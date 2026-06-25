import {
  siPython,
  siTypescript,
  siReact,
  siNodedotjs,
  siFastapi,
  siDjango,
  siDocker,
  siKubernetes,
  siJenkins,
  siTerraform,
  siRedis,
  siGit,
  siLangchain,
  siLanggraph,
  siCrewai,
  siHuggingface,
  siPytorch,
  siScikitlearn,
  siMlflow,
} from "simple-icons";

export type TechIcon = { title: string; hex: string; path: string };

/** Brand logos (Simple Icons), keyed by slug used in the skills data. */
export const techIcons: Record<string, TechIcon> = {
  python: siPython,
  typescript: siTypescript,
  react: siReact,
  nodedotjs: siNodedotjs,
  fastapi: siFastapi,
  django: siDjango,
  docker: siDocker,
  kubernetes: siKubernetes,
  jenkins: siJenkins,
  terraform: siTerraform,
  redis: siRedis,
  git: siGit,
  langchain: siLangchain,
  langgraph: siLanggraph,
  crewai: siCrewai,
  huggingface: siHuggingface,
  pytorch: siPytorch,
  scikitlearn: siScikitlearn,
  mlflow: siMlflow,
};

/** Perceived luminance of a hex color (0–255). Used to keep dark logos visible. */
export function isDarkHex(hex: string): boolean {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 45;
}
