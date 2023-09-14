import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CancelIcon from "../../icon/cancel-icon";
import HearthIcon from "../../icon/hearth-icon";

const styles = StyleSheet.create({
    swipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 7,
        borderRadius: 10
    },
    text: {
        fontSize: 20, 
        fontWeight: '700', 
        color: 'white', 
        marginLeft: 5
    }
})

const OverlayLabels = {
    left: {
        element: (
            <View style={styles.swipeContainer}>
                <CancelIcon width={17} height={17} />
                <Text style={styles.text}>NOPE</Text>
            </View>
        ),
        style: {
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 40,
                marginLeft: -20,
            }
        }
    },
    right: {
        element: (
            <View style={styles.swipeContainer}>
                <HearthIcon width={20} height={20} />
                <Text style={styles.text}>YEAH</Text>
            </View>
        ),
        style: {
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 40,
                marginLeft: 20,
            }
        }
    },
};

export default OverlayLabels;
