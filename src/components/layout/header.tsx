import React from 'react';
import styled from 'styled-components';
import { useTranslations } from '../../context/translations';
import { LocalizedLink } from '../localized-link';
import { Container } from './container';

export function Header() {
  const { site } = useTranslations();

  return (
    <StyledHeader>
      <Container>
        <StyledLogo>Luiz Felipe Gonçalves</StyledLogo>
        <StyledNav>
          <StyledNavLink to="/">{site.nav.home}</StyledNavLink>
          <StyledNavLink to="/about">{site.nav.about}</StyledNavLink>
          <StyledNavLink to="/contact">{site.nav.contact}</StyledNavLink>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: #000;
`;

const StyledLogo = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  border: solid 3px #000;
  color: #fff;
  font-style: italic;
  font-size: 2rem;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledNavLink = styled(LocalizedLink)`
  padding: 0 0.25rem;
  border: solid 3px #fff;
  color: #fff;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:focus {
    border-color: orange;
  }
`;
