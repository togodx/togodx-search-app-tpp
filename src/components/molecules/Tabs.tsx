import React, { useState } from "react";
import { Tab } from "@/components/atoms/Tab";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components'
import { theme } from '@/components/theme'

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  text-align: center;
`;

interface ContentProps {
  active: boolean;
}

export const Content = styled.div<ContentProps>`
  ${props => (props.active ? "" : "display:none")}
`;

const TabBar = () => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={2}>
            Taxonomy
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id={2}>
            Gene
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>
            Compound
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <h1>Taxonomy</h1>
          </Content>
          <Content active={active === 1}>
            <h1>Gene</h1>
          </Content>
          <Content active={active === 2}>
            <h1>Compound</h1>
          </Content>
        </>
      </ThemeProvider>
    </>
  );
}

export default TabBar;