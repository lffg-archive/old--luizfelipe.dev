import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screen.md};
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  padding: 20px;

  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    padding: 15px;
  }
`;
