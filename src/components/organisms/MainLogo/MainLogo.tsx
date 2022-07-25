import Assets from '@/components/atoms/Assets'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: 40px auto;
`
const StyledContainer = styled.div`
  text-align: center;
`

const MainLogo = () => (
  <>
    <StyledWrapper>
      <StyledContainer>
        <Assets.Logo />
      </StyledContainer>
      <StyledContainer>
        <Assets.LogoContent />
      </StyledContainer>
    </StyledWrapper>
  </>
);

export default MainLogo;
