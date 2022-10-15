import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Text from '../Text';
import colors from '../../config/colors';

function ListItem({
    description,
    IconComponent,
    image,
    onPress,
    renderRightActions,
    title,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        {description && (
                            <Text style={styles.description} numberOfLines={2}>
                                {description}
                            </Text>
                        )}
                    </View>
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="chevron-right"
                        size={25}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.white,
        flexDirection: "row",
        padding: 15,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 10,
    },
    image: {
        borderRadius: 35,
        height: 70,
        width: 70,
    },
    description: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;