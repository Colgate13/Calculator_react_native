import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props){

        return (
        <View style={styles.view_father}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={styles.btn_TouchableOpacity} 
        ><Text style={styles.text_TouchableOpacity}>{props.numero}</Text>
        </TouchableOpacity>
        </View>
        );
}
const styles = StyleSheet.create({
    view_father:{
        backgroundColor:'black',
        borderColor:'white',
        borderWidth:1,
        width:'33.3%',
        height:'25%'
    },
    btn_TouchableOpacity:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text_TouchableOpacity:{
        fontSize:24,
        color:'white'
    },
});