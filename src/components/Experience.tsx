import { OrbitControls } from "@react-three/drei";
import { Hussainberg } from "./Hussainberg";

export const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={1} />
      <directionalLight 
        position={[-5, 5, 5]} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      <group position={[0, -4, 0]} scale={0.5}>
        <Hussainberg />
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
