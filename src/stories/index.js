import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';
import Card from '../components/Card';
import {Title} from '../App';
import List, { ListItem } from '../List';
// import Button from './Button';
// import Welcome from './Welcome';

const todos = ['todo 1', 'todo 2', 'todo 3'];

storiesOf('Card', module)
  .add('Card Design', () => (
    <WithNotes notes={'Dont touch the '}>
      <Card>
        <Title>hello</Title>
      </Card>
    </WithNotes>
  ));
storiesOf('List', module)
  .add('List Design', () => (
    <List data={todos} />
  ))
  .add('List Item', () => (
    <ListItem>Hello</ListItem>
  ))


// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
