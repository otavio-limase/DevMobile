import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';

export default function index() {
    const handleProgress = (release) => {
        setTimeout(release, 1000);
        setTimeout(() => router.push("/principal"), 1010);
    }
    return (
        <View style={estilo.container}>
            <Image style={estilo.imagem} source={require("../assets/images/LogoBG.png")} />
            <View style={estilo.button}>
                <ThemedButton progress name="rick" type="danger" textSize={30} height={70} width={250} onPress={handleProgress}>Iniciar</ThemedButton>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#dcc5bf",
    },

    imagem: {

        flex: 1,
        alignSelf: "center",
        resizeMode: "contain"

    },
    button: {
        alignSelf: "center",
        marginBottom: 16,
        flex: 0.15
    },

})
