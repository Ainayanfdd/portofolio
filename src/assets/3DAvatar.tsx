import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

export function Avatar(props: any) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(
    import.meta.env.BASE_URL + "614230004_amy_macarena_dance.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Cek apakah ada animasi dan aksi tersedia
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction?.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Penting: preload model untuk performa
useGLTF.preload(import.meta.env.BASE_URL + "614230004_amy_macarena_dance.glb");
