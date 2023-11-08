import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CadastroMusicos from '../CadastroMusicos';
import Sobre from '../Sobre';
import Musicos from '../Musicos';
import Eventos from '../Eventos';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#a7542f',
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          paddingBottom: 0,

          bottom: 16,
          left: 16,
          right: 16,
          elevation: 0,
          borderRadius: 20
        }
      }}
    >
      <Tab.Screen
        name="Registre um Musico"
        component={CadastroMusicos}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="account-music" size={40} color="#F1DDCA" />
            }

            return <MaterialCommunityIcons name="account-music-outline" size={40} color="#F1DDCA" />
          }
        }}

      />

      <Tab.Screen name="Musicos"
        component={Musicos}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="playlist-music" size={40} color="#F1DDCA" />
            }

            return <MaterialCommunityIcons name="playlist-music-outline" size={40} color="#F1DDCA" />
          }

        }} />

      <Tab.Screen name="Eventos"
        component={Eventos}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="calendar-month" size={40} color="#F1DDCA" />
            }

            return <MaterialCommunityIcons name="calendar-month-outline" size={40} color="#F1DDCA" />
          }

        }} />

      <Tab.Screen name="Sobre Nós"
        component={Sobre}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="information" size={40} color="#F1DDCA" />
            }

            return <MaterialCommunityIcons name="information-outline" size={40} color="#F1DDCA" />
          }

        }} />
    </Tab.Navigator>
  );
}
