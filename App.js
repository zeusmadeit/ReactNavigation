import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from '@expo/vector-icons';
// 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, NotificationsScreen, ExploreScreen, SettingsScreen, RegisterScreen} from './screens';


export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator   
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={BottomTabNavigator}/>
      <HomeStack.Screen name="Register" component={RegisterScreen}/>
      <HomeStack.Screen name="Settings" component={SettingsScreen}/>
    </HomeStack.Navigator>
  );
}

const bottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <bottomTab.Navigator 
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
    >
      <bottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (<Icon name="home" size={25} color={'gray'} />)
        }}
      />
      <bottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (<Icon name="comments" size={25} color={'gray'} />)
        }}
      />
      <bottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => (<Icon name="search" size={25} color={'gray'} />)
        }}
      />
      <bottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarBadge: 4,
          tabBarIcon: ({ tintColor }) => (<Icon name="user" size={25} color={'gray'} />)
        }}
      />
    </bottomTab.Navigator>
  )
}

// <Tab.Navigator
// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
// })}
// tabBarOptions={{
//   activeTintColor: 'tomato',
//   inactiveTintColor: 'gray',
// }}
// >
// <Tab.Screen name="Home" component={HomeScreen} />
// <Tab.Screen name="Settings" component={SettingsScreen} />
// </Tab.Navigator>