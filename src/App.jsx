import GlobalStyles from './styles/GlobalStyles';

import { DoughnutsCanvas, GradientBackground, Overlay } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <GradientBackground />
      <DoughnutsCanvas />
      <Overlay />
    </>
  );
}

export default App;
