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
  metaImage: {
    url: string;
    width: number;
    height: number;
  };
  openGraph: IOpenGraph;
}

export type { IOpenGraph, ISEO };
