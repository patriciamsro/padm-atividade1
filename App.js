import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Prática Layout Flexbox</Text>
      
      <View style={styles.linhaDePlacas}>
        <Image
          style={styles.img}
          source={require('./assets/placa1.png')}
        />
        <Image
          style={styles.img}
          source={require('./assets/placa2.png')}
        />
      </View>
      <View style={styles.linhaDePlacas}>
        <Image
          style={styles.img}
          source={require('./assets/placa3.png')}
        />
        <Image
          style={styles.img}
          source={require('./assets/placa4.png')}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
  },
  header: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
  },
  img: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    margin: 5
  },
  linhaDePlacas: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 'auto'
  }
});
