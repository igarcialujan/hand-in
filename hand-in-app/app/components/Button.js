import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ color = "primary", title, onPress }) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        marginVertical: 10,
        padding: 15,
        width: "100%",
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    }
});

export default AppButton;