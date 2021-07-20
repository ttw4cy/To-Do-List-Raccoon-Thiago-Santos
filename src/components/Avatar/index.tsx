import React from 'react';                        //Importacao do React
import { View, Text, Image } from 'react-native'; //Importacao do React Native


import { styles } from './styles';                //importacao da estilizacao do aplicativo

type Props = {                                    //Utilizacao da estrutura Props para auxiliar na reutilizacao do AVATAR
    urlImage: string;
}
export function Avatar ( { urlImage }: Props) {   //Criacao da funcao do Avatar
    return (

        <View style={styles.container}> 
            <Image
                source={{uri: urlImage }}
                style = {styles.avatar}
            />

            
        </View>
    )
}