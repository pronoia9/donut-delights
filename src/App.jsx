import { Suspense, useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import { DonutsCanvas, Overlay, Preloader } from './components';
import GlobalStyles from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { isDarkTheme, systemThemeChangeHandler } from './utils/utils';

function App() {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [speed, setSpeed] = useState(1);
  const [loading, setLoading] = useState(true);

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  // DISABLE LOADING AFTER 7s
  useEffect(() => { setTimeout(() => { setLoading(false); }, 8500); }, []);

  return (
    <ThemeProvider theme={isDarkTheme(theme) ? darkTheme : lightTheme}>
      <GlobalStyles />
      {loading && <Preloader />}
      <Suspense fallback={null}>
        <DonutsCanvas speed={speed} theme={theme} />
        <FadeIn />
      </Suspense>
      <Overlay theme={theme} setTheme={setTheme} speed={speed} setSpeed={setSpeed} />
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
