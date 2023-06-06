import { Suspense, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { DonutsCanvas, Background, Overlay } from './components';
import styled, { keyframes } from 'styled-components';

function App() {
  const [speed, setSpeed] = useState(1);

  return (
    <>
      <GlobalStyles />
      <Background />
      <Suspense fallback={null}>
        <DonutsCanvas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <Speed>
        <input type='range' min='0' max='10' value={speed} step='1' onChange={(e) => setSpeed(e.target.value)} />
      </Speed>
    </>
  );
}

export default App;

const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

const Speed = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
  color: 'black';
`;
