import styled from 'styled-components';
import { toggleTheme } from '../utils/utils';

export default function ThemeButton({ theme, setTheme }) {
  return <Container onClick={() => toggleTheme(theme, setTheme)} />;
}

const Container = styled.div`
  position: absolute;
  right: -1.1vw;
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.themeBackground} url(${({ theme }) => theme.themeIcon}) no-repeat center;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  z-index: 99;
`;
