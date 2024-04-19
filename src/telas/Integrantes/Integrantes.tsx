
import { StyleSheet, Text, View} from 'react-native';


const pessoa1 = {
    nome: 'Enzo Ross Gallone',
    rm: 'RM551754'
  };
  
  const pessoa2 = {
    nome: 'Vinicius de Araújo Camargo',
    rm: 'RM99494'
  };
  

const IntegrantesScreen = () => {
  return (
    <View style={styles.personContainer}>
      <View style={styles.person}>
        <Text style={styles.personText}>{`${pessoa1.nome} - ${pessoa1.rm}`}</Text>
        <Text style={styles.personText}>{`${pessoa2.nome} - ${pessoa2.rm}`}</Text>
      </View>
    </View>
  );
};


export default IntegrantesScreen;

const styles = StyleSheet.create({
    personContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor:'lightblue',
    marginTop: 20,
    height: 900
  },
  person: {
    backgroundColor: 'skyblue',
    padding: 8, 
    borderRadius: 8,
    width:300,
    alignItems: 'center',
    marginTop: 285
    
  },
  personText: {
    fontSize: 16, 
    marginBottom: 5, 
   
   
  },
 
});