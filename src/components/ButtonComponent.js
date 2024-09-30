import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ button, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={() => onPress(button)} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{button}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: "#ebebeb", 
  },
});
