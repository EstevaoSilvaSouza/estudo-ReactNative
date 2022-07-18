import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';

//Imports dos components..
import CurrentPrince from './src/components/CurrentPrince/'
import HistoryGraphic from './src/components/HistoryGraphic/'
import QuotationList from './src/components/QuotationList'



const AddZero = (number) => {
  if (number <= 9) {
    return `0` + number
  }
  return number
}

const url = (days) => {
  const date = new Date();
  const timeActual = days;
  const end_day = `${date.getFullYear()}-${AddZero(date.getMonth() + 1)}-${AddZero(date.getDate())}`;

  date.setDate(date.getDate() - timeActual)
  const start_day = `${date.getFullYear()}-${AddZero(date.getMonth() + 1)}-${AddZero(date.getDate())}`;
  console.log('Dia Inicial: ' + start_day + ' ' + 'Até:' + end_day)
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_day}&end=${end_day}`;
}

const getBitDate = async (url) => {
  const data = await fetch(url);
  const response = await data.json();
  const itemBpi = response.bpi;
  const listItemsBpi = Object.keys(itemBpi).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: itemBpi[key]
    };
  });
  return listItemsBpi.reverse();
}

const getBitDateg = async (url) => {
  const datag = await fetch(url);
  const responseg = await datag.json();
  const itemBpig = responseg.bpi;
  return Object.keys(itemBpig).map((key) => itemBpig[key]);

}


export default function App() {

  const [day, setDay] = React.useState(30);
  const [update, setUpdate] = React.useState(true);
  const [bitList, setBitList] = React.useState([]);
  const [graphIList, setGraphIList] = React.useState([0]);
  const [dayAtual, setDayAtual] = React.useState();

  const updateDay = (number) => {
    setDay(number);
    setUpdate(true);
  }


  React.useEffect(() => {


    getBitDate(url(day)).then(date => {
      setBitList(date)
      setDayAtual([...date][0].valor)
    }).catch(e => console.log(`Erro ${e}`));

    getBitDateg(url(day)).then(dateg => {
      setGraphIList(dateg)
      console.log(graphIList)
    }).catch(e => console.log(e))



    if (update) {
      setUpdate(false)
    }
  }, [update])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#F50d41'
        barStyle='light'
      />
      {bitList ? (
        <>
          <CurrentPrince valorAtual={dayAtual} />
          {graphIList ? <HistoryGraphic infoDataGraphic={graphIList} /> : <View />}
          <QuotationList requestDay={updateDay} listData={bitList} day={day} />
        </>
      ) :
        <Text>Loading..</Text>}

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? '40' : 0
  },
});
