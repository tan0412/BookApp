/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import Drawers from './Drawer';
import BookDetail from '../screens/BookDetail';
import Notifications from '../screens/Notifications';
import Favourites from '../screens/Favourites';

// Screens
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const profileName = "profile";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function BookStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={Drawers} options={{ headerShown: false }}/>
      <Stack.Screen name="screen" component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
function MainContainer() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false,
          tabBarStyle: { padding: 10, height: 70},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'heart' : 'heart-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        >

        <Tab.Screen name={homeName} component={BookStack} options={{ headerShown: false}} />
        <Tab.Screen name={detailsName} component={Favourites} options={{ headerShown: false }}/>
        <Tab.Screen name={settingsName} component={Notifications}options={{ headerShown: false }} />
        <Tab.Screen name={profileName} component={Profile}options={{ headerShown: false }} />
       
        
        
        
        

      </Tab.Navigator>
    
  );
}

export default MainContainer;