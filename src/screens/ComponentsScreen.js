import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const subHeader = 'Aji'
    return (
        <View>
            <Text style={style.textStyle}>Getting started with react native!</Text>
            <Text style={style.subHeaderStyle}>My name is {subHeader}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen