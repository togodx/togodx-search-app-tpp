import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const StyledFormContainer = styled.form`
  top: 10px;
  left: 28px;
  position: absolute;
  margin: 0 auto;
	width: 320px;
  height: 40px;
	border-radius:200px;
  border: 1px solid ${props => props.theme.colors.$green01};
  background-color: ${props => props.theme.colors.$gray02};
`

const StyledInputText = styled.input.attrs({
  type: 'text',
})`
  border: none;
  height: 38px;
  margin-left: 35px;
  width: 260px;
  background-color: ${props => props.theme.colors.$gray02};
  &:focus {
    outline: 0;
  }
`

const StyledSearchIcon = styled(SearchIcon).attrs({
  type: 'submit',
})`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  color: ${props => props.theme.colors.$green02};
`

export const SearchBar = ({ setSearchWord }) => {
  const [inputWord, setInputWord] = useState('')

  return (
    <StyledFormContainer onSubmit={(e) => { e.preventDefault(); setSearchWord(inputWord)}}>
      <StyledSearchIcon onClick={() => setSearchWord(inputWord)} />
      <StyledInputText onChange={(e) => setInputWord(e.target.value)} />
    </StyledFormContainer>
  )
};
