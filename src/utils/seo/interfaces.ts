interface IOpenGraph {
  title: string;
  description: string;
  url?: string;
  type?: string;
}

interface ISEO {
  metaTitle: string;
  metaDescription: string;
  canonicalURL: string | null;
  openGraph: IOpenGraph;
  keywords?: string;
  metaRobots?: string | null;
  metaImage?: {
    url: string;
    width: number;
    height: number;
  } | null;
}

export type { IOpenGraph, ISEO };
