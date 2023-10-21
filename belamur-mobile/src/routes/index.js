import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from  '../pages/Login';
import Sobre from '../pages/Sobre';
import Inicio from '../pages/Inicio';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
  }