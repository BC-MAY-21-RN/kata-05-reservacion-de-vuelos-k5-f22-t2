import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/NavigationStack';

import { StyleSheet } from 'react-native';



function App () {
  return (
    <NavigationContainer>
        <NavigationStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
