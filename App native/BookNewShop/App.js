/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable semi */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect} from 'react';

import { CartProvider } from './CartContext';

import MainContainer from './navigation/tabs';
import BookDetail from './screens/BookDetail';
import Category from './screens/Category';
import EditProfile from './screens/EditProfile';
import Search from './screens/Search';
import ShoppingCart from './screens/ShoppingCart';
import { requestUserPermission, NotificationListner, GetFCMToke } from './Service/pushnotification_helper';
import messaging from '@react-native-firebase/messaging';
import Payment from './screens/Payment';
import SplashComponent  from './BookStoreOpen/SplashComponent';
import Login from './BookStoreOpen/Login';
import SignUpComponent from './BookStoreOpen/SignUpComponent';
const Stack = createStackNavigator();
const App = () => {
  useEffect (()=> {
      requestUserPermission();
      NotificationListner(); 
  },[])
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false,}}
        initialRouteName={'Home'}>
          
          <Stack.Screen name='tabs' component={MainContainer} />
          <Stack.Screen name='SplashComponent' component={SplashComponent} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUpComponent' component={SignUpComponent} />
          
          <Stack.Screen name='EditProfile' component={EditProfile} />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen name="BookDetail" component={BookDetail} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  )
};
export default App;
