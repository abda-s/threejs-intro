import { useState } from "react";
import type { ReactNode } from "react";
import { CharacterAnimationsContext } from "./CharacterAnimationsContext";

export const CharacterAnimationsProvider = ({ children }: { children: ReactNode }) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};
