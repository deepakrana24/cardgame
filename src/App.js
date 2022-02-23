/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet,Image ,ScrollView} from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';




const cardImage = [

  {src: require('./Assests/helmet-1.png')},
  {src: require('./Assests/potion-1.png')},
  {src: require('./Assests/ring-1.png')},
  {src: require('./Assests/shield-1.png')},
  {src: require('./Assests/sword-1.png')},
];
const App = () => {
  const [ cards , setCards ] = useState([]);
  const [ turns ,setTurns ] = useState(0);
  const [  startGame , setStartGame ]= useState(false);

  const shuffledCard = () =>{
    // eslint-disable-next-line no-shadow
    const shuffledCard = [...cardImage , ...cardImage]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card , id : Math.random()})
     );
     setCards(shuffledCard);
     setTurns(0);
     setStartGame(true);
  };


  const isTrue = startGame;
  return (

    <View style={styles.maincontainer}>
      <Text style={styles.textprop}>Card Game</Text>
   {  isTrue ? <ScrollView>
      <View style={styles.cardGrid} >
          {
            cards.map((cardd) => (
              <View key={cardd.id}>
                <View>
                  <Image source={cardd.src} />
                  <Image source={require('./Assests/cover.png')} />
                </View>
              </View>
            ))
          }
      </View>
      </ScrollView>:<Text > click below </Text>}
      <Button style={ styles.buttonDecAfterStart } mode="contained" onPress={shuffledCard}>
       Start
      </Button>
    </View>

  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'white',

  },
   textprop: {
    marginTop:80 ,
    fontWeight:'bold',
    color: 'red',
    fontSize: 40 ,
   },
   buttonDecBeforeStart: {
    //  borderColor: 'pink',
     
   },
   buttonDecAfterStart: {
    //  borderColor: 'pink',
    marginTop:10,
     borderRadius: 10,
     borderWidth: 10,
     borderColor: '#fff',
     marginBottom:70 ,
     padding:15,
   },
   cardGrid:{
     fontSize: '30',
   }

});

export default App;


