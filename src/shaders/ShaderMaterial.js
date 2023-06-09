import { Color } from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';

export const ShaderMaterial = shaderMaterial(
  {
    uResolution: [window.innerWidth * 0.8, window.innerHeight * 0.8],
    uTime: 0,
    uColor1: new Color('#78a4f5'),
    uColor2: new Color('#8df2e6'),
    uColor3: new Color('#eaa0f0'),
    uColor4: new Color('#f9d8ca'),
  },
  vertexShader,
  fragmentShader
);

extend({ ShaderMaterial });
