import styled from 'styled-components';
import DonutSketch from './DonutSketch';
import ThemeButton from './ThemeButton';

export default function Overlay({ theme, setTheme }) {
  return (
    <Container>
      <Title>
        <h1>
          FROSTY <br />
          FUN —
        </h1>
        <p>
          Sprinkle your day with sugary delight.
          <br />
          Donut dreams come true! -
        </p>
      </Title>
      <Hamburger>
        <ThemeButton theme={theme} setTheme={setTheme} />
      </Hamburger>
      <Description>
        Indulge in the hole-y goodness<br />
        Where every bite is pure delight
      </Description>
      <Poem>
        Doughy rings of joy,<br />
        Sprinkles dancing with delight,<br />
        Donuts are a snack,<br />
        That'll keep you up all night.<br /><br />
              
        Dip them in chocolate,<br />
        Or glaze them with sweet cream,<br />
        Donuts are a treat,<br />
        A sugary, dreamy theme.<br />
      </Poem>
      <Sketch>
        <DonutSketch />
      </Sketch>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Aaargh', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  
  @media (max-width: 500px) {
    font-size: 0.85rem;
    line-height: 1.1rem;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  font-family: 'Mathilde', cursive;
  font-size: 3rem;
  font-weight: 500;
  line-height: 2.5rem;

  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'FFF Tusj', sans-serif;
    font-weight: 400;
    font-size: min(9vw, 7em);
    line-height: 1em;
  }

  @media (max-width: 500px) {
    font-size: 2.25rem;
    line-height: 1.75rem;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  top: 5vw;
  right: 5vw;
`;

const Description = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`;

const Poem = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  width: 35ch;
  max-width: 40%;
  letter-spacing: -0.01em;
  text-align: right;
`;

const Sketch = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 40%;
    height: 40%;
  }
`;
