import React from 'react';
import {Text, View} from 'react-native';

const Cat4 = () => {
  return (
    <View>
      <Text>Yo soy un gato</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Bienvenidos</Text>
      <Cat4 />
      <Cat4 />
      <Cat4 />
    </View>
  );
};

export default Cat4;