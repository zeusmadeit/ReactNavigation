import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
// 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, NotificationsScreen, ExploreScreen, CreateScreen, SettingsScreen, RegisterScreen} from './screens';


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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Create') {
              iconName = focused ? 'ios-add' : 'ios-add-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user-o';
            }

            // You can return any component that you like here!
            return route.name === 'Profile' ? <FontAwesome name={iconName} size={size} color={color} /> : <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
    >
      <bottomTab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ tintColor }) => (<Icon name="home" size={25} color={'gray'} />)
        // }}
      />
      <bottomTab.Screen
        name="Explore"
        component={ExploreScreen}
      />
      <bottomTab.Screen
        name="Create"
        component={CreateScreen}
      />
      <bottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <bottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarBadge: 4,
        }}
      />
    </bottomTab.Navigator>
  )
}
