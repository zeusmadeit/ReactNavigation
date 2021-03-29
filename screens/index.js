import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';

// export class HomeScreen extends React.Component {
//     render() {
//       return(
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <Text> This is my Home screen </Text>
//         </View>
//       );
//     }
//   }
  export function HomeScreen({navigation}) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Home screen </Text>
          <TouchableOpacity style={{marginTop: "10px"}} onPress={() => navigation.navigate('Profile')} >
            Goto Profile
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: "10px"}} onPress={() => navigation.navigate('Register')} >
            Goto Sign Up
          </TouchableOpacity>

        </View>
      );
  }
  export class ExploreScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> This is my Explore screen </Text>
        </View>
      );
    }
  }
  
  export class NotificationsScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
          <Text> This is my Notifications screen </Text>
        </View>
      );
    }
  }
  
  export  class ProfileScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> This is my Profile screen </Text>
        </View>
      );
    }
  }
  export  class CreateScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> Create a new Post here </Text>
        </View>
      );
    }
  }

  export function RegisterScreen({navigation}) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> This is the Registration Screen </Text>
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('Settings');
            }}
          >
            Goto Settings
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={{marginTop: "10px"}} onPress={() => navigation.navigate('Profile')} >
            Goto Profile
          </TouchableOpacity>
        </View>
      );
  }
  export function SettingsScreen ({navigation}) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> This is the Settings screen </Text>
          <TouchableOpacity style={{marginTop: "10px"}} onPress={() => navigation.goBack()} >
            Go Back
          </TouchableOpacity>
        </View>
      );
  }
  