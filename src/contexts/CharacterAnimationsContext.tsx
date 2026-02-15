import { createContext } from "react";

export interface CharacterAnimationsContextType {
  animationIndex: number;
  setAnimationIndex: (index: number) => void;
  animations: string[];
  setAnimations: (animations: string[]) => void;
}

export const CharacterAnimationsContext = createContext<CharacterAnimationsContextType>({
  animationIndex: 0,
  setAnimationIndex: () => {},
  animations: [],
  setAnimations: () => {},
});
