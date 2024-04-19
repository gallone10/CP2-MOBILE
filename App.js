
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MercadoScreen from './src/telas/Mercado/Mercado.tsx';
import CarrinhoDeComprasScreen from './src/telas/CarrinhoDeCompras/CarrinhoDeCompras.tsx';
import DeletarProdutosScreen from './src/telas/DeletarProdutos/DeletarProdutos.tsx';
import IntegrantesScreen from './src/telas/Integrantes/Integrantes.tsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mercado">
        <Stack.Screen name="Mercado" component={MercadoScreen} />
        <Stack.Screen name="CarrinhoDeCompras" component={CarrinhoDeComprasScreen} />
        <Stack.Screen name="DeletarProdutos" component={DeletarProdutosScreen} />
        <Stack.Screen name="Integrantes" component={IntegrantesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
};

export default App;
