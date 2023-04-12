import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import React from 'react';
import CatApp from './src/components/Props';
import Cafe2 from './src/components/State';
import PizzaTranslator from './src/components/HandlingTextInput';

export default function App() {
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>hola gato</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'red',
            borderWidth: 1,
          }}
          defaultValue="probando"
        />
        <Cafe2 />
        <PizzaTranslator />
      </View>
    </ScrollView>
  );
}
