
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function MercadoScreen({ navigation }) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [quantidadeProduto, setQuantidadeProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');
  
    async function salvar() {
      if (!nomeProduto.trim() || !precoProduto.trim() || !quantidadeProduto.trim()) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      let produtos = [];
      if (await AsyncStorage.getItem('PRODUTOS') !== null) {
        produtos = JSON.parse(await AsyncStorage.getItem('PRODUTOS'));
      }
  
      produtos.push({ nome: nomeProduto, quantidade: quantidadeProduto, preco: precoProduto });
  
      await AsyncStorage.setItem('PRODUTOS', JSON.stringify(produtos));
      alert('PRODUTO SALVO');
      setNomeProduto('');
      setQuantidadeProduto ('');
      setPrecoProduto('');
      
    }
  
    return (
      <View style={styles.formContainer}>
        <Text> Adicionar ao Carrinho </Text>
      
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={nomeProduto}
          onChangeText={text => setNomeProduto(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantidadeProduto}
          onChangeText={text => setQuantidadeProduto(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={precoProduto}
          onChangeText={text => setPrecoProduto(text)}
        />
  
        <TouchableOpacity style={styles.formBtn} onPress={salvar}>
          <Text style={{ color: 'black' }}>ADICIONAR</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CarrinhoDeCompras')}>
          <Text style={{ color: 'black' }}>VER CARRINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Integrantes')}>
          <Text style={{ color: 'black' }}>INTEGRANTES</Text>
        </TouchableOpacity>
        
  
      </View>
    );
  }

export default MercadoScreen;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      btn: {
        borderWidth: 1,
        height: 50,
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      formBtn: {
        borderWidth: 1,
        height: 50,
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
      }
    });