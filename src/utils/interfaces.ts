interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICardCategorie {
  name: string;
  image: string;
}

interface IMainSliderSlide {
  title: string;
  description: string;
  img: string;
}

export type { ICardCategorie, ILink, IMainSliderSlide, ITitle };
