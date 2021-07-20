import React from "react";                              //Importacao do React
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlightProps,
} from 'react-native';                                  //Importacao do React Native

import ButtonImg from '../../assets/buttonimg.png';     //Importacao da imagem do botao
import { styles } from './styles';                      //importacao da estilizacao do aplicativo

type Props = TouchableHighlightProps& {                 //Utilizacao da estrutura Props para auxiliar na reutilizacao do botao
    title: string;
}

export function ButtonIcon( { title, ...rest} : Props){ //Criacao da funcao do botao
    return(
        <TouchableOpacity
         style={styles.container}
         {...rest}
          >
            <View style={styles.iconWrapper} >
                <Image 
                source={ButtonImg} 
                style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>

    );
}