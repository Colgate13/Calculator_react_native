import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect }from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Botao from './Botao';

export default function App() {

  console.disableYellowBox = true;

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal , setSinal ] = useState("");

  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];
  for(var i = 0; i <= 9; i++)
  {
    numeros.push(i);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Topo}><Text style={{ fontSize: 24 }}>{stringCalculo}</Text></View>

      <View style={{ flex: 1, flexDirection: 'row'}}> 
        <TouchableHighlight style={{ width: '25%' }}><Text style={{ fontSize: 24, textAlign: 'center' }}>+</Text></TouchableHighlight>
        <TouchableHighlight style={{ width: '25%' }}><Text style={{ fontSize: 24, textAlign: 'center' }}>-</Text></TouchableHighlight>

        <TouchableHighlight style={{ width: '25%' }}><Text style={{ fontSize: 24, textAlign: 'center' }}>/</Text></TouchableHighlight>
        <TouchableHighlight style={{ width: '25%' }}><Text style={{ fontSize: 24, textAlign: 'center' }}>*</Text></TouchableHighlight>

      </View>

      <View>
      {
        numeros.map(function(e){
          return (<Botao numeros={e}></Botao>)
        })
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Topo: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
});
