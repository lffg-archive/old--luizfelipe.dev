import styled from 'styled-components';

export const App = styled.div`
  max-width: 850px;
  background-color: #fff;
  color: #212121;
  font-family: 'SF Mono', 'Fira Code', 'Monaco', 'Menlo', 'Consolas',
    'Source Code Pro', 'Courier', 'Courier New', 'Courier', monospace;
  font-size: 18px;
  line-height: 1.65;

  @media screen and (min-width: 850px) {
    border: solid 1px #000;
    margin: 1rem;
  }
`;

export const Header = styled.header`
  padding: 2rem 2rem 0 2rem;
`;

export const Container = styled.main`
  padding: 0 2rem 2rem 2rem;
`;

export const Footer = styled.footer`
  margin-top: 1.5rem;
  padding: 2rem;
  background-color: #212121;
  color: #fff;
`;
