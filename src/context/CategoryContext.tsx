import { createContext, ReactNode, useContext, useState } from "react";

type CategoryContextType = {
  currentCategory: number;
  setCurrentCategory: (category: number) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
