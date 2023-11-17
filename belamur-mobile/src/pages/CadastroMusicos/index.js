import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';

export default function CadastroMusicos() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [instrument, setInstrument] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      Alert.alert('Erro', 'Digite um email válido.');
      return false;
    }
    return true;
  };

  const validateFields = () => {
    if (name.trim() === '' || instrument.trim() === '' || email.trim() === '' || phone.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleCadastroMusico = async () => {
    if (!validateEmail() || !validateFields()) {
      return;
    }

    try {
      const response = await axios.post('http://192.168.15.8:3000/musician', {
        name,
        instrument,
        email,
        phone
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Musicos');
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha no cadastro. Verifique as informações fornecidas.');
    }
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