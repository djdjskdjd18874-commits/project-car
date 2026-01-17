import { createContext, useEffect, useState } from "react";
import React from "react";


type ProviderProps = {
  children: React.ReactNode;
};

type ProviderContextType = {
  favorites: number[];
  isFavorite: (product: number) => boolean;
  toggleFavorite: (product: number) => void;
};


const FavoritesContext = createContext<ProviderContextType | undefined>(undefined);

const FavoritesContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const x: string | null = localStorage.getItem("stored");
      
      return x ? JSON.parse(x) : [];
    }
    return [];
  });

  useEffect(() => {
    const stored = localStorage.getItem("stored");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stored", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: number) => {
    setFavorites((prev) =>
      prev.includes(product) ? prev.filter((favId) => favId !== product) : [...prev, product]
    );
  };

  const isFavorite = (product: number) => favorites.includes(product);

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
