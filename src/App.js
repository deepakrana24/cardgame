/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Button} from 'react-native';
import React, { useState } from 'react';

const cardImage = [
  {src: require('./Assests/cover.png')},
  {src: require('./Assests/helmet-1.png')},
  {src: require('./Assests/potion-1.png')},
  {src: require('./Assests/ring-1.png')},
  {src: require('./Assests/shield-1.png')},
  {src: require('./Assests/sword-1.png')},
];
const App = () => {
  const [cards ,setCards ] = useState([]);
  const  [turns , setTurns ]= useState(0);
 
  const shuffledCard = ()=>{
    // eslint-disable-next-line no-shadow
    const shuffledCard = [...cardImage , ...cardImage]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card , id : Math.random})
     );
     setCards(shuffledCard);
     setTurns(0);
  };


  console.log('thus ',cards , turns);
  return (

    <View style={styles.maincontainer}>
      <Text style={styles.textprop}>Card Game</Text>
      <Button
        onPress={shuffledCard}
        title="Start Game"
        color="#841584"
        style ={styles.buttonDec}
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
   buttonDec: {
     borderColor: 'pink',
   }
});

export default App;
