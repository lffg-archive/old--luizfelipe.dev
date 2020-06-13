import React from 'react';
import styled from 'styled-components';
import { useTranslations } from '../../context/translations';
import { LocaleChanger } from '../locale-changer';

export function Footer() {
  const { site } = useTranslations();

  return (
    <StyledFooter>
      <LocaleChanger className="locale-changer" />
      <div>
        Copyright &copy; {new Date().getFullYear()} Luiz Felipe Gonçalves. All
        rights reserved.
      </div>

      {/* TODO: Refactor this. */}
      <div dangerouslySetInnerHTML={{ __html: site.footer.openSource }} />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 1rem;
  border: solid 1px #000;
  font-size: 80%;

  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    border: none;
    border-top: solid 1px #000;
  }

  @media screen and (min-width: ${(props) => props.theme.screen.md}) {
    .locale-changer {
      float: right;
    }
  }

  a {
    --color: #000;
    --hoverColor: #fff;
    --hoverBackground: #000;
  }
`;
