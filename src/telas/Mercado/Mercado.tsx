import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
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
        setQuantidadeProduto('');
        setPrecoProduto('');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar ao Carrinho</Text>

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

            <TouchableOpacity style={styles.button} onPress={salvar}>
                <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CarrinhoDeCompras')}>
                <Text style={styles.buttonText}>VER CARRINHO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Integrantes')}>
                <Text style={styles.buttonText}>INTEGRANTES</Text>
            </TouchableOpacity>

        </View>
    );
}

export default MercadoScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '40%',
      paddingHorizontal: 10,
      marginTop: 10,
      backgroundColor: 'white',
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
});