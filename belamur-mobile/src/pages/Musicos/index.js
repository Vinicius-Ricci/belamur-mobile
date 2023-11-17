import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musicos() {
  const [musicos, setMusicos] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.15.8:3000/musician')
      .then((response) => {
        setMusicos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.15.8:3000/musician/${id}`);

      setMusicos((prevMusicos) => prevMusicos.filter((musico) => musico.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Musicos Cadastrados</Text>
      <ScrollView style={styles.scroll}>
        {musicos.map((musico) => (
          <View key={musico.id || musico.email} style={styles.musicianCard}>
            <View style={styles.musicianInfo}>
              <Text style={styles.musicianName}>{musico.name}</Text>
              <Text style={styles.musicianEmail}>E-mail: {musico.email}</Text>
              <Text style={styles.musicianEmail}>Intrumento: {musico.instrument}</Text>
              <Text style={styles.musicianEmail}>Contato: {musico.phone}</Text>
            </View>

            {/* Botão de exclusão */}
            {musico.id === '654d35fdfd0dc6c1237db109' && (
              <TouchableOpacity onPress={() => handleDelete(musico.id)}>
                <MaterialCommunityIcons name="delete" size={20} color="red" />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDCA',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },

  musicianCard: {
    backgroundColor: '#FEFEFE',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15
  },

  musicianInfo: {
    flex: 1,
  },

  musicianName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  musicianEmail: {
    fontSize: 16,
    color: '#a1a1a1',
  },

  scroll: {
    maxHeight: '78%',
  },
});
