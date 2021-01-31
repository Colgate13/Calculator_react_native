import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect }from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Botao(props) {

    return (<View><Text>{props.numeros}</Text></View>);
}