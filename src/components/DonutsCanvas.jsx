import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

import { Donut } from './';

export default function DonutsCanvas({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
    <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }} dpr={[1, 1.5]}>
      {/* <color args={['#FBE195']} attach='background' /> */}

      {/* Lights */}
      {/* <ambientLight intensity={0.2} /> */}
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color='orange' />

      {/* Objects */}
      {Array.from({ length: count }, (_, i) => (
         <Donut key={i} index={i} pZ={Math.round(easing(i / count) * depth)} speed={speed} /> 
      ))}

      <Environment files={'venice_sunset_1k.hdr'} />

      {/* Effects */}
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
      </EffectComposer>
    </Canvas>
  );
}
