import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterAnimationsContext } from "./contexts/CharacterAnimationsContext";
import { useContextBridge } from "@react-three/drei";

function Scene() {
  // Use useContextBridge to pass the context from the DOM to the Canvas
  const ContextBridge = useContextBridge(CharacterAnimationsContext);
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
      {/* eslint-disable-next-line */}
      <ContextBridge>
        <Experience />
      </ContextBridge>
    </Canvas>
  );
}

function App() {
  return (
    <CharacterAnimationsProvider>
      <Scene />
      <Interface />
    </CharacterAnimationsProvider>
  );
}

export default App;
