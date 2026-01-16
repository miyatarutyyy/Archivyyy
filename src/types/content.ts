// src/types/content.ts
export type WorkItem = {
  title: string;
  summary: string;
  href: string;
  status?: "WIP" | "Stable" | "Archived";
};

export type BlogItem = {
  title: string;
  href: string;
  dateISO: string; //YYYY-MM-DD
  summary?: string;
};

