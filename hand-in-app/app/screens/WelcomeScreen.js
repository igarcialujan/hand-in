import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpeg")}
        >
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
                <Text style={styles.tagline}>Give it a second chance!</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;