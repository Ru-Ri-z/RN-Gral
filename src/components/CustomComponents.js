import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat3 = () => {
  return (
    <View>
      <Text>Hola, mi nombre es...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
        }}
        defaultValue="pepe"
      />
    </View>
  );
};

export default Cat3;
