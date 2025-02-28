type SlideData = {
  id: number;
  image: string;
  content: React.ReactNode[];
  buttonText?: string;
};

type CategoryData = {
  id: number;
  name: string;
  slides: SlideData[];
};

export type { CategoryData, SlideData };
