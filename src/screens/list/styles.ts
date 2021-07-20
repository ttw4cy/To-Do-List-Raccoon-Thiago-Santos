import { StyleSheet } from 'react-native'; //Importacao do StyleSheet para estilizar a tela List

export const styles = StyleSheet.create({ //Responsavel por estilizar a tela list por meio de StyleSheet
    container: {                          //Container é responsável por estilizar o View que engloba toda screen
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbd9d9'
    },
    image: {                              //Responsavel por estilizar a imagem
        width:'100%',
        height: 1000,
        top: 22
        
    },
    title: {                              //Responsavel por estilizar o texto no botao
        color: '#e30000',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        position: 'absolute',
        top: 650,
        fontFamily: 'sans-serif-light'

    },
    

});