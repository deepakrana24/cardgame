/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const App = () => {
  const onPressStartNewGame = ()=>{

  };
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.textprop}>Card Game</Text>
      <Button
        onPress={onPressStartNewGame}
        title="Start Game"
        color="#841584"
        accessibilityLabel="Start game here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',

  },
   textprop: {
    color: 'red',
    fontSize: 40 ,
   },
});

export default App;
