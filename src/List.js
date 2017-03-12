import React from 'react';
import styled from 'styled-components';

export const ListItem = styled.li`
  height: 50px;
  background-color: green;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-item: center;
`

const List = ({ data }) => (
  <div>
    {data.map((item, i) => (
      <ListItem key={i}>
        {item}
      </ListItem>
    ))}
  </div>
);

export default List;