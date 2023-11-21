import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const ParallaxPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.parallaxContainer}>
        <Image
          source={require('../../../src/assets/Belamur.jpg')}
          style={styles.parallaxImage}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bem-Vindo à Nossa Empresa</Text>
        <Text style={styles.description}>
          Belamur é uma dupla apaixonada por transformar o amor em música. Cantam em diversos tipos de celebrações, desde casamentos (cerimônias e recepções) até eventos corporativos, festas de debutante, chás revelação e homenagens a momentos especiais. Onde houver surpresa e emoção, Belamur estará lá para criar a trilha sonora perfeita e memorável.
          A equipe é composta por especialistas técnicos de som e profissionais de mídias sociais, garantindo uma experiência completa e única para cada evento. Eles estão prontos para dar voz às emoções do seu momento especial.
          Além disso, a banda oferece diversas formações musicais e repertórios personalizados, adaptados ao estilo e à atmosfera do seu evento. Com seu talento musical excepcional, Belamur torna cada ocasião verdadeiramente inesquecível através da música.

        </Text>
        {/* Adicione mais texto e conteúdo conforme necessário */}
      </View>
    </ScrollView>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDCA',
  },
  parallaxContainer: {
    height: windowHeight / 3,
    overflow: 'hidden',
  },
  parallaxImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#a1a1a1',
    fontWeight: 'bold',
    padding: 10
  },
});

export default ParallaxPage;
