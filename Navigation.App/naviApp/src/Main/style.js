import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(109, 117, 120)',
    },
    textTitle: {
        color: 'rgb(237, 227, 180)',
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
        backgroundColor: 'rgb(139, 158, 155)',
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
        backgroundColor: 'rgb(230, 203, 165)',
        width: 180,
        height: 120,
        marginBottom: 6,


    },
    textItens: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
    },
})

export default styles