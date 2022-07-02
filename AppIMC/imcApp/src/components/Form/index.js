import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, BackHandler, Vibration, Pressable, Keyboard } from 'react-native';
import ResultImc from './ResultImc/Index'
import style from './style'

export default function Form() {

    const [Imc, SetImc] = React.useState(null);
    const [Message, SetMessage] = React.useState("Preencha a Altura e Peso");
    const [Health, SetHealth] = React.useState(null);
    const [Weight, SetWeight] = React.useState(null);
    const [Btn, SetButton] = React.useState("Calcular");
    const [errorMessageH, SetErrorMessageH] = React.useState(null);
    const [errorMessageW, SetErrorMessageW] = React.useState(null);

    const CalculatorIMC = () => {
        const AlturaConvert = Health.replace(',', '.')
        const PesoConvert = Weight.replace(',', '.')
        return SetImc(((PesoConvert) / (AlturaConvert * AlturaConvert)).toFixed(2))
    }

    const validationIMC = () => {
        if (Health === null) {
            SetErrorMessageH('Campo obrigatório!!')
        }
        if (Weight === null) {
            SetErrorMessageW('Campo obrigatório!!')
        }
    }

    const segundos = 1000;

    const validation = () => {
        if (Health !== null && Weight !== null) {
            CalculatorIMC();
            SetErrorMessageH(null);
            SetErrorMessageW(null);
            SetHealth(null);
            SetWeight(null);
            SetMessage("IMC Calculado:")
            SetButton("Calcular novamente")
            return
        }
        Vibration.vibrate(segundos)
        Alert.alert(
            "Opaaa",
            "Por favor, insira Altura e Peso para calcular !!",
            [
                {
                    text: 'Entendi',
                    style: "destructive"
                },
                {
                    text: 'Sair do aplicativo',
                    onPress: () => BackHandler.exitApp(),
                    style: 'cancel'
                }
            ]
        )
        validationIMC();
        SetImc(null);
        SetMessage(`Insira Altura e Peso `)
        SetButton("Calcular")


    }

    return (
        <Pressable onPress={() => Keyboard.dismiss()} style={style.containerBox}>
            <View style={style.formBox}>
                <Text style={style.labelText}>Altura:</Text>
                <Text style={style.textError}>{errorMessageH}</Text>
                <TextInput
                    style={style.inputStyle}
                    onChangeText={SetHealth}
                    value={Health == null ? '' : Health}
                    placeholder='Ex 1.75'
                    keyboardType='numeric'
                />
                <Text style={style.labelText}>Peso:</Text>
                <Text style={style.textError}>{errorMessageW}</Text>
                <TextInput
                    style={style.inputStyle}
                    onChangeText={SetWeight}
                    value={Weight == null ? '' : Weight}
                    placeholder='Ex 75.56'
                    keyboardType='numeric'
                />

                <TouchableOpacity style={style.buttonCalculadora} onPress={() => { validation() }}>
                    <Text style={style.textBtn}>{Btn}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageImc={Message} imc={Imc} />
        </Pressable>
    )
}

