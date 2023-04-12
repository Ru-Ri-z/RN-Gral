import React from 'react';
import {Text, View} from 'react-native';

const Cat5 = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe1 = () => {
  return (
    <View>
      <Cat5 name="Maru" />
      <Cat5 name="Jellylorum" />
      <Cat5 name="Spot" />
    </View>
  );
};

export default Cafe1;
