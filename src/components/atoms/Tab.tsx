import styled from "styled-components";

interface TabProps {
  active: boolean;
  id;
}

export const Tab = styled.button<TabProps>`
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-size: 1em;
  color: ${props => (props.active ? '' : `${props.theme.colors.$gray03}`)};
  white-space: nowrap;
  cursor: pointer;
  padding: 0 34px;
  outline: none;
  transition: background-color 0.5s ease-in-out;
  border: none;
  border-bottom: ${props => (props.active ? `5px solid ${props.theme.colors.$green02}` : "5px solid transparent")};
  background-color: white;
  :hover {
    background-color: white;
  }
`
