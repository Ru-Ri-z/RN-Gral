import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat6 = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Yo soy {props.name}, y estoy {isHungry ? 'hambriento' : 'lleno'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Ponme leche, por favor' : 'gracias'}
      />
    </View>
  );
};

const Cafe2 = () => {
  return (
    <>
      <Cat6 name="pepe" />
      <Cat6 name="Juan" />
    </>
  );
};

export default Cafe2;
