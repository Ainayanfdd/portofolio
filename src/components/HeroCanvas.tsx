import { Suspense } from "react";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Avatar } from "src/assets/3DAvatar";

export default function HeroCanvas() {
  const matches = useMediaQuery("(min-width: 650px)");
  const theme = useMantineTheme();
  const color =
    theme.colorScheme === "dark"
      ? theme.colors.yellow[5]
      : theme.colors.yellow[7];

  return (
    <div>
      <Canvas
        camera={{ position: [0, 0, 800], fov: 15 }}
        style={{
          height: matches ? "75vh" : 225,
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.5} position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <Avatar position={[-110, -80, 400]} scale={[32.5, 32.5, 32.5]} />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={0.2} radius={0.7} />
          </EffectComposer>
        </Suspense>
        <OrbitControls target={[0, 0, 0]} enableDamping />
      </Canvas>
    </div>
  );
}