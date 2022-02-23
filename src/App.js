/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet,Image ,ScrollView} from 'react-native';
import React, { useState ,useEffect } from 'react';
import { Button } from 'react-native-paper';
import SingleCard from './Components /ourCard';




const cardImage = [

  {src: require('./Assests/helmet-1.png'),link:'./Assests/helmet-1.png'},
  {src: require('./Assests/potion-1.png'),link:'./Assests/potion-1.png'},
  {src: require('./Assests/ring-1.png'),link:'./Assests/ring-1.png'},
  {src: require('./Assests/shield-1.png'),link:'./Assests/shield-1.png'},
  {src: require('./Assests/sword-1.png'),link:'./Assests/sword-1.png'},
];

const App = () => {
  const [cards , setCards ] = useState([]);
  const [turns ,setTurns ] = useState(0);
  const [startGame,setStartGame ] = useState(false);
  const [choiceOne , setChoiceOne] = useState(null);
  const [choiceTwo , setChoiceTwo] = useState(null);
  const [countturns ,setCOnTurns ] = useState(0);


  const handleChoice = (props) =>{
     choiceOne ? setChoiceTwo(props) : setChoiceOne(props);
     setCOnTurns(countturns + 1);
  };

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

   const restTurn = () =>{
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(turns + 1);
   };


   useEffect(() => {
      if (choiceOne && choiceTwo) { if (choiceOne?.link === choiceTwo?.link){
          console.log('they matched main',choiceOne?.link,choiceTwo?.link ,countturns);
          restTurn();
        } else {
          console.log('they dont matched else',choiceOne?.link,choiceTwo?.link);
          restTurn();
        }}
   }, [choiceOne,choiceTwo]);



  const isTrue = startGame;
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.textprop}>Card Game</Text>
   {  isTrue ? <ScrollView>
      <View style={styles.cardGrid} >
          {
            cards.map((card) => (
              <SingleCard key={card.id} card={card} handleChoice = {handleChoice}/>
            ))
          }
      </View>
      </ScrollView> : <Text style={styles.extra}> click below to start the game  </Text>}
      <Button style={ styles.buttonDec } mode="contained" onPress={shuffledCard}>
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
    backgroundColor:'black',

  },
   textprop: {
    marginTop:50 ,
    marginBottom:20,
    fontWeight:'bold',
    color: 'red',
    fontSize: 40 ,
   },

   buttonDec: {
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
     display: 'flex',
     flexGrow:4,
     flex:1,
     height:10,
     flexDirection:'row',

   },
   extra:{
     marginBottom: 10 ,
     fontWeight:'200',

   },
   imgs:{
    marginRight: 10,
    marginHorizontal:10,

   },

});

export default App;


