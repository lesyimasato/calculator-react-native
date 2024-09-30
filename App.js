import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ResultDisplay from './src/components/ResultDisplay';
import ButtonComponent from './src/components/ButtonComponent';
import useCalculator from './src/components/UseCalculator'; 

export default function App() {
  const { currentNumber, previewResult, handleInput } = useCalculator();

  const buttons = ['AC', 'DEL', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 3, 2, 1, '+', '+/-', 0, '.', '='];

  return (
    <View style={styles.container}>
      <ResultDisplay currentNumber={currentNumber} previewResult={previewResult} />

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          {buttons.map((button) => (
            <ButtonComponent
              key={button}
              button={button}
              onPress={handleInput}
              style={[
                styles.button,
                { backgroundColor: typeof button === 'number' ? '#394454' : '#4e5a6e' }
              ]}
              textStyle={[
                styles.textButton,
                button === '=' ? { color: "white", fontSize: 30 } : {}
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303946",
    justifyContent: 'space-between', 
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
  },
  button: {
    borderColor: '#303946',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    fontSize: 20,
    color: "#d6d6d6",
  },
});
