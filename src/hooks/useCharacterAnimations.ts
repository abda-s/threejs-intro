import { useContext } from "react";
import { CharacterAnimationsContext } from "../contexts/CharacterAnimationsContext";

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
