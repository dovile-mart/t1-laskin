import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  
  const [eka, setEka] = useState('');
  console.log(eka);
  const [toka, setToka] = useState('');
  console.log(toka);
  
  const initialFocus = useRef(null);

  let [tulos, setTulos] = useState('');
  const [data, setData] = useState([]);

  const sumNumbers = () => {
    tulos = Number(eka) + Number(toka);
    console.log('Summa: ' + tulos);
    setTulos(tulos);
    const summa = (eka + ' + ' + toka + ' = ' + tulos);
    console.log(summa);
    setData([...data, {key: summa}]);
    setEka('');
    setToka('');
    initialFocus.current.focus();
  } 

  const minusNumbers = () => {
    tulos = Number(eka) - Number(toka);
    console.log('Vähennys: ' + tulos);
    const vahennys = (eka + ' - ' + toka + ' = ' + tulos);
    console.log(vahennys);
    setTulos(tulos);
    setData([...data, {key: vahennys}]);
    setEka('');
    setToka('');
    initialFocus.current.focus();
  }  
    
  

  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
        <View style={styles.inrow}>
          <Text>Result: </Text>
          <Text>{tulos}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            ref={initialFocus}  
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
          <View style={styles.button}>
            <Button title="+" onPress={sumNumbers} /> 
          </View>
          <View style={styles.button}>
            <Button title="-" onPress={minusNumbers} />
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <Text>History</Text>

        <FlatList style={styles.list}
          data={data}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
  container2: {
    flex: 2
  },
  input: {
    width:150, 
    border: "grey", 
    borderWidth:1,
    margin: 1,
    paddingStart: 15
  },
  inrow: {
    flexDirection: 'row',
    margin: 3
    //alignItems: 'center',
    //justifyContent: 'space-around'
  },
  button: {
    margin:5
  },
  list: {
    alignSelf: 'center',
    textAlign: 'left',
    padding: 2
  }
});
