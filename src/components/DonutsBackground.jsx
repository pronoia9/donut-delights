import { useRef } from 'react';
import { Color } from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import vertexShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';
import { darkTheme } from '../styles/Themes';

const darkColors = ['', '#225ee1', '#28d7bf', '#ac53cf', '#e7a39c']; // dark
const mediumColors = ['', '#4d8be9', '#6ce4d6', '#d485e4', '#f2c5ba']; // medium
const lightColors = ['', '#78a4f5', '#8df2e6', '#eaa0f0', '#f9d8ca']; // light
const colorfulColors = ['', '#225ee1', '#28d7bf', '#dd3333', '#e7a39c']; // colorful

extend({
  LightShaderMaterial: shaderMaterial(
    {
      uResolution: [window.innerWidth * 0.8, window.innerHeight * 0.8],
      uTime: 0,
      uColor1: new Color(lightColors[1]),
      uColor2: new Color(lightColors[2]),
      uColor3: new Color(lightColors[3]),
      uColor4: new Color(lightColors[4]),
    },
    vertexShader,
    fragmentShader
  ),
});

extend({
  DarkShaderMaterial: shaderMaterial(
    {
      uResolution: [window.innerWidth * 0.8, window.innerHeight * 0.8],
      uTime: 0,
      uColor1: new Color(darkColors[1]),
      uColor2: new Color(darkColors[2]),
      uColor3: new Color(darkColors[3]),
      uColor4: new Color(darkColors[4]),
    },
    vertexShader,
    fragmentShader
  ),
});

function DonutsBackgroundMaterial({ theme }) {
  const ref = useRef();
  useFrame((state, delta) => { ref.current.uTime += delta * 10; });
  return theme === 'dark' ? <darkShaderMaterial ref={ref} /> : <lightShaderMaterial ref={ref} />;
}

export default function DonutsBackground({ depth, theme }) {
  const { viewport } = useThree();
  return (
    <>
      <mesh scale={[viewport.width * 10, viewport.height * 10, 1]} position={[0, 0, -depth]}>
        <planeGeometry />
        <DonutsBackgroundMaterial theme={theme} />
      </mesh>
      {theme === 'dark' && (
        <mesh scale={[viewport.width * 10, viewport.height * 10, 1]} position={[0, 0, -depth + 1]}>
          <planeGeometry />
          <meshBasicMaterial color='black' transparent opacity={0.25} />
        </mesh>
      )}
    </>
  );
}
