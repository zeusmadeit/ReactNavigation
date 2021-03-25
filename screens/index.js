import React from 'react';
import { StyleSheet, Button, Text, View} from 'react-native';

export const HomeScreen = ({ navigation}) => {
    return (
        <React.Fragment>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </React.Fragment>
    );
};

export const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is my profile</Text>;
};

export const LoginScreen = ({ navigation, route }) => {
    return (
            <View>
                <Text>This is the Log in Screen</Text>
                <Text onClick = {() => navigation.push(RegisterScreen)}>Click here to Register </Text>
            </View>
    );
};
export const SplashScreen = ({ navigation, route }) => {
    return (
            <View style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "20px"}}>
                <Text>Welcome</Text>
            </View>
    );
};

export const RegisterScreen = ({ navigation, route }) => {
    return (<View>
        <Text onClick = {() => navigation.push(ProfileScreen)}>This is the Register Screen click to visit Profile </Text>
    </View> );
};
