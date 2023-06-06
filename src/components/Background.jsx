import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Background() {
  const gradientRef = useRef(null),
    interval = useRef();

  const colors = [
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0],
  ];

  const colorIndices = [0, 1, 2, 3];
  let step = 0;
  const gradientSpeed = 0.002;

  const updateGradient = () => {
    const { current: gradientElement } = gradientRef;

    if (!gradientElement) return;

    const c0_0 = colors[colorIndices[0]];
    const c0_1 = colors[colorIndices[1]];
    const c1_0 = colors[colorIndices[2]];
    const c1_1 = colors[colorIndices[3]];

    const istep = 1 - step;
    const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    const color1 = `rgb(${r1},${g1},${b1})`;

    const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    const color2 = `rgb(${r2},${g2},${b2})`;

    gradientElement.style.background = `-webkit-gradient(linear, left bottom, left top, from(${color1}), to(${color2}))`;
    gradientElement.style.background = `-moz-linear-gradient(top, ${color1} 0%, ${color2} 100%)`;

    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
  };

  useEffect(() => {
    interval.current = setInterval(updateGradient, 10);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return <Bg ref={gradientRef} id='gradient' />;
}

const Bg = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  z-index: -10;
`;
