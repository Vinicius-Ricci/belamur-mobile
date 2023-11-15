import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Cadastro() {

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCadastro = async () => {
    console.log("Função chamada")
    axios.post('http://192.168.15.11:5000/auth/register', {
      name,
      email,
      phone,
      state,
      city,
      password,
      confirmPassword
    })
      .then((response) => {
        console.log('Cadastrou');
        console.log(response.data);
        // redirecionar para a tela de login após o cadastro bem-sucedido.
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error(error);
      });

  };


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <ScrollView>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            placeholder="Digite o seu nome..."
            style={styles.input}
            value={name}
            onChangeText={setName}
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
            placeholder="Digite o seu telefone..."
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.title}>Estado</Text>
          <TextInput
            placeholder="Digite seu o seu estado..."
            style={styles.input}
            value={state}
            onChangeText={setState}
          />

          <Text style={styles.title}>Cidade</Text>
          <TextInput
            placeholder="Digite a sua cidade..."
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Digite uma senha..."
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry ={true}
          />

          <Text style={styles.title}>Confirme a senha</Text>
          <TextInput
            placeholder="Confirme sua senha..."
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry ={true}
          />

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
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
    marginBottom: 50,
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