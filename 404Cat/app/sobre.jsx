import { router } from 'expo-router';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';

export default function Sobre() {
    const handleProgress = (release) => {
        setTimeout(release, 1000);
        setTimeout(() => router.push("../"), 1010);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre</Text>
            <Text style={styles.texto}>
                Este aplicativo, <Text style={styles.destaque}>404 Cat</Text> (versão 1.0), foi desenvolvido como trabalho para a disciplina{" "}
                <Text style={styles.destaque}>"Programação para Dispositivos Móveis"</Text>.
                {"\n\n"}
                O objetivo do 404 Cat é tornar a consulta e o aprendizado dos códigos de status HTTP mais leve e divertida. Basta digitar um código ou deixar o app sortear um gato aleatório: o significado aparece na tela acompanhado de um simpático felino ilustrado pelo projeto{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://http.cat')}>http.cat</Text>.
                {"\n\n"}
                O app foi feito em React Native e Expo Router, pensado para ser fácil de usar em qualquer celular.
                {"\n\n"}
                Agradecemos ao site http.cat pelas imagens cheias de personalidade, que enriquecem a experiência do app.
                {"\n\n"}
                Explore, divirta-se e, na dúvida sobre algum código HTTP, deixa que nossos gatinhos te explicam!
            </Text>
            <View style={styles.button}>
                <ThemedButton progress name="rick" type="danger" textSize={25} height={70} width={250} onPress={handleProgress}>Voltar</ThemedButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcc5bf",
        padding: 30,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 32,
        color: "#8a3257",
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 18
    },
    texto: {
        fontSize: 18,
        color: "#444",
        textAlign: "justify"
    },
    destaque:
    {
        fontWeight: "bold",
        color: "#8a3257"
    },
    link: {
        color: "#0077cc",
        textDecorationLine: 'underline'
    },
    button: {
        alignSelf: "center",
        marginBottom: 16,
        padding: 10,
        marginVertical: 50
    }

});