import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

import { Donut, DonutsBackground } from './';
import { isDarkTheme } from '../utils/utils';

export default function DonutsCanvas({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)), theme }) {
  return (
    // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
    <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }} dpr={[1, 1.5]}>
      {/* Background Gradient Shader */}
      <DonutsBackground theme={theme} depth={depth} />

      {/* Lights */}
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={isDarkTheme(theme) ? 3 : 10} color='pink' />

      {/* Objects */}
      {Array.from({ length: count }, (_, i) => (
        <Donut key={i} index={i} pZ={Math.round(easing(i / count) * depth)} speed={speed} rng={Math.floor(Math.random() * 12) + 1} />
      ))}

      {isDarkTheme(theme) ? <Environment files={'images/moonless_golf_1k.hdr'} /> : <Environment files={'images/venice_sunset_1k.hdr'} />}

      {/* Effects */}
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={10} height={700} />
      </EffectComposer>
    </Canvas>
  );
}

useGLTF.preload('/models/donut1.glb');
useGLTF.preload('/models/donut2.glb');
useGLTF.preload('/models/donut3.glb');
useGLTF.preload('/models/donut4.glb');
useGLTF.preload('/models/donut5.glb');
useGLTF.preload('/models/donut6.glb');
useGLTF.preload('/models/donut7.glb');
useGLTF.preload('/models/donut8.glb');
useGLTF.preload('/models/donut9.glb');
useGLTF.preload('/models/donut10.glb');
useGLTF.preload('/models/donut11.glb');
useGLTF.preload('/models/donut12.glb');
