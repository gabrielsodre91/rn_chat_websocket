import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.instructionsText}>Insira um apelido pelo qual você sersá identificado no chat.</Text>
      </View>
      <TextInput style={styles.nickname}></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.enter}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    marginBottom: 20,
    marginHorizontal: 20
  },
  instructionsText: {
    fontSize: 18,
    textAlign: 'center'
  },
  nickname: {
    borderWidth: 1,
    borderColor: '#000',
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 25,
    paddingHorizontal: 25
  },
  enter: {
    borderWidth: 1,
    borderColor: '#f99',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#778DD2'
  }
});

export default Home;