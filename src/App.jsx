import GlobalStyles from './styles/GlobalStyles';

import { DoughnutsCanvas, Background, Overlay } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <DoughnutsCanvas />
      <Overlay />
    </>
  );
}

export default App;
