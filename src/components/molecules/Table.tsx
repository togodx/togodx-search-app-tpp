import React from "react"
import styled from 'styled-components'
import TableButton from '@/components/atoms/TableButton'


const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  margin: 0 auto;
  width: 80%;
  
  td,
  th {
    border: none;
  }
  
  th {
    font-family: 'Oswald', sans-serif;
  }

  td {
    padding: 20px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      // background-color: #efefef;
    }
    :hover {
      // background-color: lightpink;
    }
    border-bottom: 1px solid ${props => props.theme.colors.$gray03};
  }
  thead > tr {
    // background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const StyledWrapper = styled.div`
  // margin: 0 auto;
  text-align: center;
`

const titles = ['ID', 'ATTRIBUTE VALUE']

const Table = (data) => {
  return (
    <StyledWrapper>
      <TableMarkup titles={titles} data={data.data} />
    </StyledWrapper>
  )
};
export default Table;

const TableMarkup = ({ titles, data }) => 
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
          <th></th>
      </tr>
    </thead>
    <tbody>
      {
        (() => {
          if (data && data.length > 0) {
            const rows = Object.keys(data).map(id => {
                const filters = [{attribute:data[id]._source.type,nodes:[{node:data[id]._source.id,path:data[id]._source.ancestors.map(v => v.classification)}]}]
                const href = `${process.env.NEXT_PUBLIC_API_ENDPOINT}?dataset=${data[id]._source.type.split('_').pop()}&filters=${encodeURIComponent(JSON.stringify(filters))}`
              return (<tr key={id}>
                <td>{data[id]._source.id}</td>
                <td>{data[id]._source.label}</td>
                <td><TableButton href={href} /></td>
              </tr>)
            });
            return <>{rows}</>
          } else {
              // 見つからなかった場合　or まだ検索されてない
              return <></>
            }
          })()
      }
    </tbody>
  </StyledTable>

