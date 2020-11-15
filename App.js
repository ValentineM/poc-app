import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/store/configureStore';
import HomeScreen from './src/screens/Homepage';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import {decode, encode} from 'base-64';
if (!global.btoa) {  global.btoa = encode };
if (!global.atob) { global.atob = decode };

const Stack = createStackNavigator ();

export default function App(){
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home'>{props => <HomeScreen {...props} extraData={user} />}</Stack.Screen>
            <Stack.Screen name='Registration' component={RegistrationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
};
