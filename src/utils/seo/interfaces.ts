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
  metaRobots: string | null;
  canonicalURL: string;
  structuredData: string | null;
  metaImage: {
    url: string;
    width: number;
    height: number;
  } | null;
  openGraph: IOpenGraph;
}

export type { IOpenGraph, ISEO };
