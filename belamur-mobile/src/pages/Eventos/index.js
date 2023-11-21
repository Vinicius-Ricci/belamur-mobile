import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const EventForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [title, setTitle] = useState('');
  const [local, setLocal] = useState('');
  const [description, setDescription] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const validateFields = () => {
    if (title.trim() === '' || local.trim() === '' || description.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleEventSubmit = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await axios.post('http://192.168.15.8:5000/event/create', {
        title,
        start: selectedDate,
        local,
        description,
      });

      Alert.alert('Sucesso', 'Evento cadastrado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            setTitle('');
            setLocal('');
            setDescription('');
            setMarkedDates({});
            setSelectedDate('');
            navigation.navigate('MostrarEventos');
          },
        },
      ]);
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error.message);
      Alert.alert('Erro', 'Falha no cadastro. Verifique as informações fornecidas.');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Calendar
          onDayPress={(date) => setSelectedDate(date.dateString)}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#a7542f' } }}
          style={styles.calendar}
        />

        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Título do Evento</Text>
          <TextInput
            placeholder="Digite o título do evento..."
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Text style={styles.title}>Local do Evento</Text>
          <TextInput
            placeholder="Digite o local do evento..."
            style={styles.input}
            value={local}
            onChangeText={(text) => setLocal(text)}
          />

          <Text style={styles.title}>Descrição do Evento</Text>
          <TextInput
            placeholder="Digite a descrição do evento..."
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleEventSubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.MostrarEventos} onPress={() => navigation.navigate('MostrarEventos')}>
            <Text style={styles.registerText}>Mostrar Eventos</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDCA',
  },

  calendar: {
    height: 150,
    marginBottom: 175,
    marginTop: 30,
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#a7542f',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold',
  },

  MostrarEventos: {
    marginTop: 14,
    alignSelf: 'center',
  },

  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a7542f',
  },

  scroll: {
    maxHeight: '40%',
  },
});

export default EventForm;
