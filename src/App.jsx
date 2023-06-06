import GlobalStyles from './styles/GlobalStyles';

import { DonutsCanvas, Background, Overlay } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <DonutsCanvas />
      <Overlay />
    </>
  );
}

export default App;
