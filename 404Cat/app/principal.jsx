import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';




const statusCodes = [
    // 1xx - Informativo
    { code: 100, message: "O gatinho está se preparando... continue!" },
    { code: 101, message: "O gatinho está mudando de protocolo!" },
    { code: 102, message: "O gatinho está processando com paciência felina..." },
    { code: 103, message: "Dicas do gatinho chegando antes da hora!" },

    // 2xx - Sucesso
    { code: 200, message: "Tudo certo! O gatinho aprovou com um miado feliz!" },
    { code: 201, message: "Criado com carinho felino!" },
    { code: 202, message: "O gatinho aceitou sua tarefa. Vai fazer depois!" },
    { code: 203, message: "O gatinho trouxe uma informação... meio duvidosa!" },
    { code: 204, message: "Tudo certo, mas o gatinho ficou quietinho dessa vez." },
    { code: 205, message: "O gatinho diz: vamos começar de novo!" },
    { code: 206, message: "O gatinho trouxe só um pedacinho!" },
    { code: 207, message: "Múltiplas respostas! O gatinho está indeciso. '-'" },
    { code: 208, message: "O gatinho já falou isso antes!" },
    { code: 214, message: "Transformado com estilo! O gatinho aplicou um filtro especial." },
    { code: 226, message: "O gatinho usou a resposta dele aprimorada!" },

    // 3xx - Redirecionamento
    { code: 300, message: "O gatinho viu muitas opções... qual escolher?" },
    { code: 301, message: "O gatinho se mudou! Vá para o novo lugar." },
    { code: 302, message: "O gatinho foi encontrado em outro cantinho!" },
    { code: 303, message: "O gatinho quer que você olhe em outro lugar." },
    { code: 304, message: "O gatinho não viu nada novo por aqui." },
    { code: 305, message: "Use um proxy, diz o gatinho (mas isso é velho!)" },
    { code: 307, message: "O gatinho foi temporariamente redirecionado." },
    { code: 308, message: "O redirecionamento do gatinho agora é permanente!" },

    // 4xx - Erro do cliente
    { code: 400, message: "Pedido estranho! O gatinho não entendeu nada." },
    { code: 401, message: "Você precisa se identificar para ver o gatinho!" },
    { code: 402, message: "Esse gatinho precisa de pagamento... miaow!" },
    { code: 403, message: "Acesso negado! O gatinho rosnou baixinho." },
    { code: 404, message: "O gatinho não encontrou esse caminho :(" },
    { code: 405, message: "Esse método não é permitido... o gatinho recusou!" },
    { code: 406, message: "O gatinho não gostou desse formato!" },
    { code: 407, message: "Você precisa autenticar com o proxy... e o gatinho também!" },
    { code: 408, message: "Demorou demais! O gatinho foi tirar uma soneca." },
    { code: 409, message: "Conflito! Dois gatinhos querem o mesmo lugar." },
    { code: 410, message: "Esse gatinho já foi embora faz tempo..." },
    { code: 411, message: "Faltou dizer o tamanho... o gatinho ficou confuso." },
    { code: 412, message: "Pré-requisitos não cumpridos. O gatinho cruzou os braços." },
    { code: 413, message: "Muito grande! O gatinho não consegue carregar isso!" },
    { code: 414, message: "Esse link é longo demais até pro rabo do gatinho!" },
    { code: 415, message: "O gatinho não entende esse tipo de arquivo!" },
    { code: 416, message: "Essa parte do arquivo não existe! O gatinho fuçou tudo." },
    { code: 417, message: "Expectativas quebradas! O gatinho se decepcionou." },
    { code: 418, message: "Sou um bule, não um gatinho!" },
    { code: 419, message: "Demorou demais pra logar! O gatinho voltou pra caixinha dele." },
    { code: 420, message: "Relaxa aí... o gatinho pediu pra você respirar fundo e miar devagar." },
    { code: 421, message: "O pedido foi enviado pro gatinho errado!" },
    { code: 422, message: "O gatinho não conseguiu entender isso..." },
    { code: 423, message: "Bloqueado! O gatinho trancou com a patinha." },
    { code: 424, message: "Falha porque algo anterior deu errado com o gatinho." },
    { code: 425, message: "Muito cedo! O gatinho ainda nem acordou." },
    { code: 426, message: "O gatinho exige uma atualização para continuar." },
    { code: 428, message: "Faltou uma condição! O gatinho exige regras claras." },
    { code: 429, message: "Muitos pedidos! O gatinho ficou sobrecarregado." },
    { code: 431, message: "Cabeçalhos grandes demais! O gatinho se perdeu nas palavras." },
    { code: 444, message: "O gatinho fechou a porta na sua cara sem dizer nada!" },
    { code: 450, message: "Esse conteúdo foi bloqueado! O gatinho acha que é muito adulto." },
    { code: 451, message: "Gatinho censurado por razões legais. Mia triste." },
    { code: 495, message: "O certificado é suspeito... o gatinho não confia!" },
    { code: 496, message: "Cadê o certificado? O gatinho exige segurança!" },
    { code: 497, message: "Você usou HTTP onde era HTTPS! O gatinho ficou confuso." },
    { code: 498, message: "Token inválido! O gatinho não conseguiu abrir o portão." },
    { code: 499, message: "Você desistiu muito cedo! O gatinho ainda estava carregando." },

    // 5xx - Erro do servidor
    { code: 500, message: "Erro no servidor! O gatinho tropeçou nos fios!" },
    { code: 501, message: "O gatinho ainda não aprendeu a fazer isso!" },
    { code: 502, message: "Resposta estranha! O gatinho recebeu dados bagunçados." },
    { code: 503, message: "Serviço indisponível! O gatinho está de folga." },
    { code: 504, message: "O gatinho esperou... e esperou... mas nada veio." },
    { code: 505, message: "Essa versão de HTTP o gatinho não conhece." },
    { code: 506, message: "Erro estranho... o gatinho está confuso com as variantes." },
    { code: 507, message: "Pouco espaço! O gatinho não tem onde guardar isso." },
    { code: 508, message: "Loop detectado! O gatinho está correndo em círculos!" },
    { code: 509, message: "Acabou a internet do gatinho! Ele está offline agora." },
    { code: 510, message: "Extensões necessárias! O gatinho precisa de plugins!" },
    { code: 511, message: "Você precisa se autenticar com a rede... e dar um petisco pro gatinho!" },
    { code: 521, message: "O servidor caiu... o gatinho derrubou sem querer!" },
    { code: 522, message: "O gatinho tentou conectar, mas ninguém atendeu." },
    { code: 523, message: "O destino sumiu! Nem o gatinho conseguiu encontrar." },
    { code: 525, message: "O aperto de mão falhou! O gatinho não conseguiu confiar." },
    { code: 530, message: "O site está congelado! O gatinho está esperando o degelo." },
    { code: 599, message: "Tempo esgotado ao conectar! O gatinho ficou esperando e cochilou." },
];
export default function principal() {
    const handleProgress1 = (release) => {
        setTimeout(release, 1000);
        setTimeout(() => {
            const code = parseInt(number);
            const status = getMessage(code);
            if (status) {
                router.push(`/gato?number=${number}&message=${encodeURIComponent(message)}`);
            }
        }, 1010);
    };
    const handleProgress2 = (release) => {
        setTimeout(release, 1000);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * statusCodes.length);
            const status = statusCodes[randomIndex];
            router.push(`/gato?number=${status.code}&message=${encodeURIComponent(status.message)}`);
        }, 1010);
    };
    const handleProgress3 = (release) => {
        setTimeout(release, 1000);
        setTimeout(() => router.push("/sobre"), 1010);
    };

    const [number, onChangeNumber] = useState('');

    let message = '';
    function getMessage(code) {
        const status = statusCodes.find(item => item.code === code);
        if (!status) {

            Alert.alert("Cuidado!", "Código não encontrado! O gatinho se perdeu :(");
        } else {
            message = status.message;
        }
        return status;
    }

    function getRandomCat() {
        const randomIndex = Math.floor(Math.random() * statusCodes.length);
        const randomStatus = statusCodes[randomIndex];
        return randomStatus;
    }



    return (
        <View style={estilo.container}>
            <View style={estilo.container1}>
                <TextInput
                    style={estilo.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Digite o código de erro aqui"
                    keyboardType="numeric"
                    inputMode='numeric' />
            </View>
            <View style={estilo.button}>
                <ThemedButton progress name="rick" type="danger" textSize={25} height={70} width={250} onPress={handleProgress1}>Gerar Gato</ThemedButton>
            </View>
            <View style={estilo.button}>
                <ThemedButton progress name="rick" type="danger" textSize={25} height={70} width={250} onPress={handleProgress2}>Gerar Aleatório</ThemedButton>
            </View>
            <View style={estilo.button}>
                <ThemedButton progress name="rick" type="danger" textSize={25} height={70} width={250} onPress={handleProgress3}>Sobre</ThemedButton>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#dcc5bf",
        justifyContent: "center"
    },
    container1: {
        flex: 0.1,
        paddingLeft: 60
    },

    button: {
        alignSelf: "center",
        marginBottom: 16,
        flex: 0.1,
        padding: 10,
    },
    input: {
        height: 50,
        width: 250,
        margin: 20,
        borderWidth: 5,
        borderColor: "#8a3257",
        padding: 10,
        textAlign: 'center',
        textAlignVertical: 'center',


    }

})