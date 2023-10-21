import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder="Digite o seu e-mail..." style={styles.input}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite a sua senha..." style={styles.input}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
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

  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold'
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
    fontSize: 20,
    marginTop: 28,

  },

  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button:{
    backgroundColor: '#a7542f',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },

  registerText:{
    color: '#a1a1a1'
  }

})