type SlideData = {
  id: number;
  image: string;
  title: string;
  subtitle: React.ReactNode[];
  buttonText?: string;
};

type CategoryData = {
  id: number;
  name: string;
  slides: SlideData[];
};

export type { CategoryData, SlideData };
