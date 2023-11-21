import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://192.168.15.8:5000/event/getAll');
        setEvents(response.data);
      } catch (error) {
        console.error('Erro ao obter eventos:', error.message);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    try {
      const formattedDate = new Date(dateString);
      if (isNaN(formattedDate)) {
        return 'Data inválida';
      }
      return format(formattedDate, 'dd/MM/yyyy');
    } catch (error) {
      console.error('Erro ao formatar a data:', error.message);
      return 'Erro ao formatar a data';
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Eventos</Text>
      <ScrollView style={styles.scroll}>
        {events.map(event => (
          <View key={event._id} style={styles.eventCard}>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>Data: {formatDate(event.start)}</Text>
              <Text style={styles.eventLocation}>Local: {event.local}</Text>
              <Text style={styles.eventDescription}>Descrição: {event.description}</Text>
            </View>
            {/* Adicione um ícone de exclusão aqui, se necessário */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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

  eventCard: {
    backgroundColor: '#FEFEFE',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  eventInfo: {
    flex: 1,
  },

  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  eventDate: {
    fontSize: 16,
    color: '#a1a1a1',
  },

  eventLocation: {
    fontSize: 16,
    color: '#a1a1a1',
  },

  eventDescription: {
    fontSize: 16,
    color: '#a1a1a1',
  },

  scroll: {
    maxHeight: '78%',
  },
});

export default EventList;
