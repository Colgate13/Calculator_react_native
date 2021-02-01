import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Botao from './Botao';

export default function App() {

  console.disableYellowBox  = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");


  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];

  for(var i = 0; i <= 9; i++){
      numeros.push(i);
  }

  function logicaCalculadora(){
    //Lógica da calculadora.
  }
 
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <StatusBar hidden />
      <View style={styles.topo}><Text style={{fontSize:24,color:'white'}}>{stringCalculo}</Text></View>
      
      <View style={styles.view_TouchableOpacity}>
        <TouchableOpacity style={styles.btnTouchaOpacity}>
          <Text style={styles.text_view_TouchableOpacity}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchaOpacity}>
          <Text style={styles.text_view_TouchableOpacity}>-</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchaOpacity}>
          <Text style={styles.text_view_TouchableOpacity}>/</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchaOpacity}>
          <Text style={styles.text_view_TouchableOpacity}>*</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.view_botao}>
          {
            numeros.map(function(e){
            return (<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
            })
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      topo:{
        backgroundColor:'rgb(20,20,20)',
        height:'16.6%',
        justifyContent:'center',
        paddingLeft:20
      },
      view_TouchableOpacity:{
        flexDirection:'row',
        height:'16.6%',
        alignItems:'center'
      },
      btnTouchaOpacity:
      {width:'25%',
      backgroundColor:'rgb(20,20,20)',
      justifyContent:'center',
      alignItems:'center',
      height:'100%'
    },
    text_view_TouchableOpacity:{
      fontSize:24,color:'white'
    },
    view_botao:{
      flexDirection:'row',
      flexWrap:'wrap',
      borderTopColor:'black',
      borderTopWidth:2,height:'66.8%'
    }
});
