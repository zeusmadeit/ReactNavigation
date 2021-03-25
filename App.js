import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import {ProfileScreen, HomeScreen, LoginScreen, RegisterScreen} from './screens';

export default function App() {
  return (
          <RootTabScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});


const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const RootTabScreen = () => {
  return (
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name = "Home"
            component = {HomeStackScreen}
          />
          <Tabs.Screen
            name = "Profile"
            component = {ProfileScreen}
          />
          <Tabs.Screen
            name = "Store"
            component = {HomeScreen}
          />

        </Tabs.Navigator>
      </NavigationContainer>
  )
}


const HomeStackScreen = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Log In' }}
        />
      <HomeStack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
      </HomeStack.Navigator>
  );
};