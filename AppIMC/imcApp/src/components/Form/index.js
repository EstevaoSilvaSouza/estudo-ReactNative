import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, BackHandler, Vibration, Pressable, Keyboard, FlatList } from 'react-native';
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
    const [imcList, setimcLIst] = React.useState([]);

    const CalculatorIMC = () => {
        const AlturaConvert = Health.replace(',', '.')
        const PesoConvert = Weight.replace(',', '.')
        const totalImc = ((PesoConvert) / (AlturaConvert * AlturaConvert)).toFixed(2)
        SetImc(totalImc)
        setimcLIst((array) => [...array, { id: new Date().getMilliseconds(), imcTotal: totalImc }])
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
        }
        else {
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
    }

    return (
        <View style={style.containerBox}>
            {
                Imc === null ?
                    <Pressable onPress={() => Keyboard.dismiss()} style={style.formBox}>
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
                    </Pressable> :

                    <View style={style.containerResult}>
                        <ResultImc messageImc={Message} imc={Imc} />
                        <TouchableOpacity style={style.buttonCalculadora} onPress={() => { SetImc(null) }}>
                            <Text style={style.textBtn}>{Btn}</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={style.textReuBox}>
                                <Text style={style.textReu}>Resultado</Text>
                            </View>

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={imcList.reverse()}
                                renderItem={({ item }) => (
                                    <View style={style.items} >

                                        <Text style={style.textItems}>ID: {item.id} | IMC: {item.imcTotal}</Text>

                                    </View>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>

            }



        </View>
    )
}

