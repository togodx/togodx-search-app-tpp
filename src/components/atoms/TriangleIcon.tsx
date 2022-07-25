import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
`

const StyledTriangleIcon = styled.div`
  margin-top: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 50px;
  border-color: ${props => props.theme.colors.$green02} transparent transparent transparent;
  // border-color: ${props => props.theme.colors.$green03} transparent transparent transparent; // 選択されてないとき
`

const TriangleIcon = () => {
  return (
    <StyledWrapper>
      <StyledTriangleIcon />
    </StyledWrapper>
  );
}

export default TriangleIcon;