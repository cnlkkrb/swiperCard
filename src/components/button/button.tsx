import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonTypes = {
    color: string,
    onPress: () => void,
    icon: React.ReactNode
  };

const IconButton = ({ color, onPress, icon }: ButtonTypes) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 20
      },
})

export default IconButton;
