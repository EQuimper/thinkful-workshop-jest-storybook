import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('<App />', () => {
  const Component = shallow(<App />);
  it('create an basic snapshot', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('have an wrapper className of App', () => {
    expect(Component.find('div').hasClass('App')).toBe(true);
  });
});
