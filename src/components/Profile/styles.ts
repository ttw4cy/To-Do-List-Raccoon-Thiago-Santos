import { StyleSheet } from "react-native"; //Importacao do StyleSheet para estilizar a tela List

export const styles = StyleSheet.create(   //Responsavel por estilizar o Profile por meio de StyleSheet
    {
        container: {                       //Container é responsável por estilizar o View que engloba toda screen
            flexDirection: 'row',
            alignItems: 'center',
            
        },
        user: {                            //Responsavel por estilizar o texto do usuario do profile
            flexDirection: 'row',
            alignItems: 'center',
            
        },
        greeting: {                        //Responsavel por estilizar as gratificacoes do profile
            fontFamily: 'sans-serif',
            color: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
        },
        username: {                        //Responsavel por estilizar o username do profile
            fontFamily: 'sans-serif-thin',
            fontWeight:'bold',
            color: '#030303',
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        message: {                         //Responsavel por estilizar a mensagem do profile
            fontFamily: 'sans-serif',
        }
    }
);
