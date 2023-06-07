import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
    transition: 0.5s ease-in-out;
  }

  path {
    fill: ${({ theme }) => theme.font};
    transition: 0.5s ease-in-out;
  }

  input[type='range'] {
    display: block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: ${({ theme }) => theme.font};
    border-radius: 5px;
    width: 100%;
    height: 2px;
    outline: 0;
    transition: 0.5s ease-in-out;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.font};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  input[type='range']::-webkit-slider-thumb:active {
    transform: scale(1);
  }
`;

export default GlobalStyles;
