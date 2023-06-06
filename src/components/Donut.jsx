import { MathUtils } from 'three';
import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Detailed } from '@react-three/drei';

export default function Donut({ index, pZ, speed }) {
  const ref = useRef(); // useThree gives you access to the R3F state model
  const { viewport, camera } = useThree(); // getCurrentViewport is a helper that calculates the size of the viewport
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -pZ]);
  const { nodes, materials } = useGLTF('/donuts.glb'); // useGLTF is an abstraction around R3F's useLoader(GLTFLoader, url). It can automatically handle draco and meshopt-compressed assets without you having to worry about binaries and such ...
  // By the time we're here the model is loaded, this is possible through React suspense
  const groups = Object.values(nodes).filter((n) => n?.isGroup && n.name !== 'Scene');
  const rng = Math.floor(Math.random() * groups.length);

  // Local component state, it is safe to mutate because it's fixed data
  const [data] = useState({
    pX: MathUtils.randFloatSpread(2), // This gives us a random value between -1 and 1, we will multiply it with the viewport width
    pY: MathUtils.randFloatSpread(height * 2), // Randomly distributing the objects along the vertical
    spin: MathUtils.randFloat(8, 12), // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
    rX: Math.random() * Math.PI, // Some random rotations, Math.PI represents 360 degrees in radian
    // rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  // useFrame executes 60 times per second
  useFrame((state, delta) => {
    // Make the X position responsive, slowly scroll objects up at the Y, distribute it along the Z
    // Delta is the time between this frame and the previous, we can use it to be independent of the screens refresh rate
    // We cap dt at 0.1 because now it can't accumulate while the user changes the tab, it will simply stop
    if (delta < 0.1) ref.current.position.set(index === 0 ? 0 : data.pX * width, (data.pY += delta * speed), -pZ);
    // Rotate the object around
    ref.current.rotation.set(
      (data.rX += delta / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += delta / data.spin)
    );
    // If they're too far up, set them back to the bottom
    if (data.pY > height * (index === 0 ? 4 : 1)) data.pY = -(height * (index === 0 ? 4 : 1));
  });

  // Using drei's detailed is a nice trick to reduce the vertex count because
  // Don't need high resolution for objects in the distance. The model contains 3 decimated meshes
  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <group scale={0.5}>
        {groups[rng].children.map((c) => (
          <mesh scale={4} geometry={c.geometry} material={c.material} />
        ))}
      </group>
    </Detailed>
  );
}

useGLTF.preload('/donuts.glb');
