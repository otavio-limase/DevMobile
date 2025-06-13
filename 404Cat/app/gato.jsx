import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';

export default function gato() {
    const { number, message } = useLocalSearchParams();
    const handleProgress = (release) => {
            setTimeout(release, 1000);
            setTimeout(() => router.push("../"), 1010);}

    return (
        <View style={estilo.container}>
            <View style={estilo.container2}>
                <Image source={{ uri: "https://http.cat/" + number }} style={estilo.Imagem}></Image>
            </View>

            <View style={estilo.container1}>
                <Text style={estilo.Texto}>{message}</Text>
            </View>
            <View style={estilo.button}>
                <ThemedButton progress name="rick" type="danger" textSize={25} height={70} width={250} onPress={handleProgress}>Voltar</ThemedButton>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#dcc5bf",
        justifyContent: "center",
        alignItems: "center"
    },
    container1: {
        flex: 1,
        justifyContent: "center",
    },
    container2: {
        justifyContent: "center",
        marginTop: 200
    },
    Imagem: {
        width: 400,
        height: 350,
        resizeMode: "contain",
    },
    Texto: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        maxWidth: 330,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    button: {
        alignSelf: "center",
        marginBottom: 16,
        padding: 10,
        marginVertical:50
    },



})