import { StyleSheet } from "react-native";                         //Importacao do StyleSheet para estilizar a tela List
import { getStatusBarHeight } from "react-native-iphone-x-helper"; //Importacao do getstatusbarheight para adaptar o statusbar no IOS 

export const styles = StyleSheet.create ({                         //Responsavel por estilizar o Home por meio de StyleSheet
    container: {                                                   //Container é responsável por estilizar o View que engloba toda screen
        flex: 1,
        backgroundColor: '#dbd9d9',
        
        
    },
    header: {                                                     //Estilizacao do Header superior do Profile
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
        backgroundColor: '#bfbbbb',
        


    }
});