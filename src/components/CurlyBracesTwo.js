import React from 'react';
import {Text} from 'react-native';

const getFullName = (
  firstName: String,
  secondName: String,
  thirdName: String,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat2 = () => {
  return (
    <Text>Hola, mi nombre es {getFullName('Pepe', 'tuamigo', 'fiel')}</Text>
  );
};

export default Cat2;
