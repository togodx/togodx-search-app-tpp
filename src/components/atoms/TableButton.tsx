import React from "react"
import styled from 'styled-components'
import Link from '@mui/material/Link';

const StyledButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 30px;
  border: 3px solid ${props => props.theme.colors.$green04};
  color: white;
  background-color: ${props => props.theme.colors.$green02};
`

const TableButton = ({href}) => {

  return (
    <Link href={href} target="_blank">
      <StyledButton>Launch TogoDX TPP</StyledButton>
    </Link>
  )
}

export default TableButton
