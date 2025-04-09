interface IOpenGraph {
  title: string;
  description: string;
  url: string;
  type: string;
}

interface ISEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  metaViewport: string;
  canonicalURL: string;
  structuredData: string | null;
  openGraph: IOpenGraph;
}

export type { IOpenGraph, ISEO };
