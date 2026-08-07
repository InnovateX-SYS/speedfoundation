import { UI } from "./ui";
import { PAGES } from "./pages";
import { CONTENT } from "./content";
import { DATA } from "./data";
import { STORIES } from "./stories";
import { ROLES } from "./roles";

export const LANGUAGES = ["English", "Igbo", "Yoruba", "French"];

// Used for locale-aware number/currency grouping.
export const LOCALES = {
  English: "en-NG",
  Igbo: "ig-NG",
  Yoruba: "yo-NG",
  French: "fr-FR",
};

// One flat lookup keyed by the English source string.
export const DICTIONARY = { ...UI, ...PAGES, ...CONTENT, ...DATA, ...STORIES, ...ROLES };

export default DICTIONARY;
