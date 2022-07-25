import Assets from '@/components/atoms/Assets'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/components/theme'

const StyledHeader = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 19px 28px 17px;
  border-bottom: 2px solid ${props => props.theme.colors.$gray03};
  background-color: ${props => props.theme.colors.$white};
  .logo-svg {
    width: 58px;
    height: auto;
  }
`;

const SiteTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.$gray01};
  margin: 0 0 0 12px;
`;
const Header = () => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <Assets.HeaderLogo />
      <SiteTitle>TPP APP</SiteTitle>
    </StyledHeader>
  </ThemeProvider>
);

export default Header;
