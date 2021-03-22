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
                <Text>Click here to <button onClick = {() => navigation.push(RegisterScreen)}>Register</button> </Text>
            </View>
    );
};

export const RegisterScreen = ({ navigation, route }) => {
    return <Text>This is the Register Screen</Text>;
};
