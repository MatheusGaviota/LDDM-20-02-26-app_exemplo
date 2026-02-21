import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  // const clicar = () => {
  //   setContador(contador + 1);
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo!</Text>

      {/* <TouchableOpacity style={styles.touchable} onPress={clicar}>
        <Text style={styles.touchableTexto}>Clique aqui</Text>
      </TouchableOpacity> */}

      <Button color='black' title="Clique aqui" onPress={() => alert('Botão clicado!')} />
      
      {/* <Text style={styles.contador}>{contador}</Text> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:
   {
    fontSize: 40,
    color: 'black',
    // Colocar espaçamento de 10px abaixo do título
    marginBottom: 10,
  },
  // touchable: {
  //   paddingVertical: 12,
  //   paddingHorizontal: 24,
  //   backgroundColor: 'white',
  //   borderRadius: 6,
  // },
  // touchableTexto: {
  //   fontSize: 20,
  //   color: '#000',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // contador: {
  //   fontSize: 20,
  // }
});
