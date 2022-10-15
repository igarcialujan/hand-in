import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Text from './Text';
import colors from '../config/colors';

function Card({ title, description, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    tint="light"
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.description} numberOfLines={1}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
    },
    description: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    detailsContainer: {
        padding: 20,  
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
    },
});

export default Card;