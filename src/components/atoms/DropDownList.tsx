import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 130px;
  height: 25px;
  border-radius: 4px;
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`

const DropDownList = () => {
  return (
    <StyledSelect>
      <option>10</option>
      <option>30</option>
      <option>50</option>
    </StyledSelect>
  );
}

export default DropDownList;