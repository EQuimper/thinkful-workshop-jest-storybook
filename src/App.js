import React, { Component } from 'react';
import styled from 'styled-components';

import List from './List';
import Card from './components/Card'
import logo from './logo.svg';
import './App.css';

export const Title = styled.h2`
  font-size: 20;
  color: ${({ color }) => color || 'black'};
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Welcome to Thinkful</Title>
        <Title color="blue">Welcome to React</Title>
        <Card>
          <Title color="red">Welcome to React</Title>
        </Card>
        <List data={['todo1', 'todo2', 'todo3']} />
      </div>
    );
  }
}

export default App;
