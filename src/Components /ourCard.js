import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SingleCard = props => {
  const handleClick = () => {
    props.handleChoice(props.card);
  };
  return (
    <View key={props.card.id}>
      <View>
        <Image style={styles.imgs} source={props.card.src} />
        <TouchableOpacity onPress={handleClick}>
          <Image style={styles.imgs} source={require('../Assests/cover.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgs: {
    // marginRight: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    position: 'relative',
    display: 'flex',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'red',
  },
});
export default SingleCard;
