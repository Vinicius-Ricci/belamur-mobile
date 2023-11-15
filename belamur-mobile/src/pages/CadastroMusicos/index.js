import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PhoneInput from 'react-native-phone-input'
import axios from 'axios';

import * as Animatable from 'react-native-animatable';

export default function CadastroMusicos() {
const [name, setName] = useState('');
const [instrument, setInstrument] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const handleCadastroMusico = async () => {
  console.log("Função chamada")
  axios.post('http://192.168.15.11:3000/musician', {
  name,
  instrument,
  email,
  phone
})
  .then((response) => {
    console.log('Cadastrou');
    console.log(response.data);
    // redirecionar para a tela de login após o cadastro bem-sucedido.
  })
  .catch((error) => {
    console.error(error);
  });

};


  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Adicione um talento!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput 
        placeholder="Digite o seu nome..." 
        style={styles.input}
        value={name}
        onChangeText={setName}
        />

        <Text style={styles.title}>Instrumento</Text>
        <TextInput 
        placeholder="Digite o seu instrumento..." 
        style={styles.input}
        value={instrument}
        onChangeText={setInstrument}
        />

        <Text style={styles.title}>E-mail</Text>
        <TextInput 
        placeholder="Digite o seu e-mail..." 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        />

        <Text style={styles.title}>Telefone</Text>
        <TextInput 
        placeholder="Digite o seu telefone" 
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastroMusico}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDCA'
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold'
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 20,
    marginTop: 28,

  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button: {
    backgroundColor: '#a7542f',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },

  registerText: {
    color: '#a1a1a1'
  }
})