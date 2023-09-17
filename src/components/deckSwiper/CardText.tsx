import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HearthIcon from '../../icon/hearth-icon';
import CancelIcon from '../../icon/cancel-icon';

type CardTextProps = {
  type: string;
}

const CardText = ({type}:CardTextProps) => {
  return (
    <View style={styles.textContainer}>
      {
        type === 'Yeah' ? (
          <HearthIcon width={25} height={25}/>
        ) : <CancelIcon width={20} height={20}/>
      }
      <Text
        style={styles.text}>
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 3,
    borderColor: 'white',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5
  }
})

export default CardText;