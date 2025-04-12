import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation)=>{
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1)|| isNaN(num2)){
      setResult("Por favor ingrese nuemros validos");
      return;
    }

    // seleccion de tipo iperacion
    switch (operation) {
      case'+':
        setResult(num1+num2);
        break;
      case'-':
        setResult(num1-num2);
        break;
      case'*':
        setResult(num1*num2);
        break;
      case'/':
        setResult(num2!==0? num1/num2: "Error: Division por cero");
        break;
      default:
        setResult('Operacion no valida');
    }
  };

  return(
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora Basica</Text>
        <Text style={styles.title}>By Bryan Farez M5A</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Numero 1"
            value={number1}
            onChangeText={setNumber1}
        />
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Numero 2"
            value={number2}
            onChangeText={setNumber2}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => calculate('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>Resultado:{result}</Text>
      </View>
  );
}

/* estilos para la app */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});
