"use client";

import { ReactNode } from "react";
import { FavoritesProvider } from "@/hooks/useFavorites";

export function Providers({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

