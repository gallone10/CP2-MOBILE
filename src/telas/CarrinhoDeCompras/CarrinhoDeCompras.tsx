
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CarrinhoDeComprasScreen({ navigation }) {
  const [listProdutos, setListProdutos] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      buscarDados();
    });

    return unsubscribe;
  }, [navigation]);

  async function buscarDados() {
    const p = await AsyncStorage.getItem('PRODUTOS');
    setListProdutos(JSON.parse(p) || []);
  }

  return (
    <View style={styles.container}>
      <Text>LISTA DE PRODUTOS</Text>

      <FlatList
        data={listProdutos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DeletarProdutos', { produto: item })}>
            <Text style={{ fontSize: 18 }}>NOME: {item.nome} QUANTIDADE : {item.quantidade} PREÇO: {item.preco} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mercado')}>
        <Text style={styles.buttonText}>ADICIONAR PRODUTO</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CarrinhoDeComprasScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      button: {
        backgroundColor: 'dodgerblue',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 20,
        width:'40%'
    },
    buttonText: {
        flex:1,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent:'center'
    },
      itemContainer: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 15,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
        backgroundColor:'#fff'
      }
    });