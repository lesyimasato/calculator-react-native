import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultDisplay = ({ currentNumber, previewResult }) => {
  return (
    <View style={styles.results}>
      <Text style={styles.resultText}>{currentNumber}</Text>
      {previewResult ? (
        <Text style={styles.previewText}>{`≈ ${previewResult}`}</Text>
      ) : null}
    </View>
  );
};

export default ResultDisplay;

const styles = StyleSheet.create({
  results: {
    width: '100%',
    minHeight: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: "#303946", 
    paddingRight: 10,
    marginHorizontal: 10,
  },
  resultText: {
    margin: 10,
    fontSize: 50,
    color: "#ebebeb", 
  },
  previewText: {
    fontSize: 30,
    color: "#7c7c7c",
    marginBottom: 10,
    marginHorizontal: 15,
  },
});
