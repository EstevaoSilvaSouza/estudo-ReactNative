import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6d7578'
    },
    textTitle: {
        color: '#ede3b4',
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 40
    },
    contentBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#8b9e9b',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    contentItens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: 100,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
        backgroundColor: '#e6cba5',
        width: 180,
        height: 120,
        marginBottom: 6,


    },
    textItens: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default styles