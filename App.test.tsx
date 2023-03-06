import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

const Example = () => {
  return (
    <View>
      <Text>Hi!</Text>
    </View>
  );
};

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
