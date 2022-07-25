import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

const SSelectedPair = Styled.div`
  height: calc((100vh - 62px) / 2);
  box-sizing: border-box;
`;

const SList = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    border-bottom: 1px solid ${props => props.theme.colors.$gray03};
`;

const GreenText = Styled.span`
    display: inline-block;
    font-size: 14px;
    font-family: 'Oswald', sans-serif;
    color: ${props => props.theme.colors.$green04};
`;

const GrayText = Styled.span`
    display: inline-block;
    font-size: 12px;
    font-family: 'Oswald', sans-serif;
    color: ${props => props.theme.colors.$gray04};
    margin: 0 6px 0 14px;
`;
const SContents = Styled.div``;



import Table from '@/components/molecules/Table';
import { Tab } from "@/components/atoms/Tab";

export const Tabs = Styled.div`
  width: 80%;
  padding: 0 24px 24px;
  margin: 40px auto 0;
  white-space: nowrap;
  text-align: center;
  overflow-x: auto;
  background: #fff;
`;

export const TableWrapper = Styled.div`
  padding: 0 0 70px;
`;

interface ContentProps {
  active: boolean;
}
export const Content = Styled.div<ContentProps>`
  ${props => (props.active ? "" : "display:none")}
`;

const Dashboard = ({ pairs }) => {
  const [active, setActive] = useState('0');
  const handleClick = e => {
    const index = e.currentTarget.id;
    if (index !== active) {
      setActive(index);
    }
  }
  return <>
    <SSelectedPair>
      <SList>
        {
          (() => {
            if (pairs && pairs.length > 0) {
              const tabs = Object.keys(pairs).map(id => {
                return (<Tab onClick={handleClick} active={active === id} id={id} key={id}>
                    <GreenText>{pairs[id].source}</GreenText>
                    <GrayText>to</GrayText>
                    <GreenText>{pairs[id].target}</GreenText>
                  </Tab>
                )
              })
              const contents = Object.keys(pairs).map(id => {
                return (<Content active={active === id} id={id} key={id}>
                  <Table
                    data={pairs[id].list}
                  />
                </Content>
                )
              })
              return (<>
                <Tabs>{tabs}</Tabs>
                <SContents>{contents}</SContents>
              </>)
            } else {
              // 見つからなかった場合　or まだ検索されてない
              return <></>
            }
          })()
        }
      </SList>
    </SSelectedPair>
  </>
}


export default Dashboard;
