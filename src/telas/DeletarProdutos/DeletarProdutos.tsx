
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function DeletarProdutosScreen({ route, navigation }) {
    const { produto } = route.params;
  
    async function deletarProduto() {
      let produtos = await AsyncStorage.getItem('PRODUTOS');
      produtos = JSON.parse(produtos).filter((item) => item.nome !== produto.nome);
      await AsyncStorage.setItem('PRODUTOS', JSON.stringify(produtos));
      navigation.goBack();
    }
  
    return (
      <View style={styles.container}>
        <Text>EXCLUIR PRODUTO</Text>
        <Text style={{ fontSize: 18 }}>NOME: {produto.nome}</Text>
        <Text style={{ fontSize: 18 }}>QUANTIDADE: {produto.quantidade}</Text>
        <Text style={{ fontSize: 18 }}>PREÇO: {produto.preco}</Text>
  
        <TouchableOpacity style={styles.button} onPress={deletarProduto}>
          <Text style={styles.buttonText}>EXCLUIR</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default DeletarProdutosScreen;

const styles = StyleSheet.create({
    
      button: {
        backgroundColor: 'red',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 20,
        width:'20%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        flex:1,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent:'center'
    },

      container: {
        flex: 1,
        backgroundColor: 'indianred',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }
    });
