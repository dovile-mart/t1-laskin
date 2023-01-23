import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  let [tulos, setTulos] = useState(0);

  const sumNumbers = () => {
    tulos = Number(eka) + Number(toka);
    console.log('Summa ' + tulos);
    setTulos(tulos);  //EI tulos=setTulos(tulos)
    console.log('Summatulos setTulos jälkeen ' + tulos);
  } 

  const minusNumbers = () => {
    tulos = Number(eka) - Number(toka);
    console.log('Vähennys ' + tulos);
    setTulos(tulos);
    console.log('Vähennystulos setTulos jälkeen ' + tulos);
  }  
    
  const [eka, setEka] = useState(0); //('')-merkkijono
  console.log(eka);
  const [toka, setToka] = useState(0); //näyttää nollan jos on tyhjä
  console.log(toka);

  return (
    <View style={styles.container}>
      <View style={styles.inrow}>
        <Text>Result: </Text>
        <Text>{tulos}</Text>
      
      </View>
      <View>
        <TextInput
          style={styles.input}  
          value={eka}
          onChangeText={eka => setEka(eka)}    
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={toka}
          onChangeText={toka => setToka(toka)} 
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inrow}>
        <Button title="+" onPress={sumNumbers} /> 
        <Text>   </Text>
        <Button title="-" onPress={minusNumbers} />
      </View>
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
  input: {
    width:150, 
    border: "grey", 
    borderWidth:1
  },
  inrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
