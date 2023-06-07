import { Suspense, useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import { DonutsCanvas, Background, Overlay } from './components';
import GlobalStyles from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { systemThemeChangeHandler } from './utils/utils';

function App() {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [speed, setSpeed] = useState(1);

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Background />
      <Suspense fallback={null}>
        <DonutsCanvas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay theme={theme} setTheme={setTheme} />
      <Speed>
        <input type='range' min='0' max='10' value={speed} step='1' onChange={(e) => setSpeed(e.target.value)} />
      </Speed>
    </ThemeProvider>
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
  color: ${({ theme }) => theme.font};
`;
