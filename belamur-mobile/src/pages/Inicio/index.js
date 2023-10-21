import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image animation="slideInDown" source={require('../../assets/logo.png')} style={{width: '100%'}} resizeMode="contain"/>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Cantando o Amor!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F1DDCA'
  },

  containerLogo:{
    flex: 2,
    backgroundColor: '#F1DDCA',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%'
  },

  containerForm:{
    flex: 1,
    backgroundColor: '#FEFEFE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },

  text:{
    color: '#A1A1A1'
  },

  button:{
    position: 'absolute',
    backgroundColor: '#a7542f',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText:{
    fontSize: 18,
    color: '#FEFEFE',
    fontWeight: 'bold'
  }
})