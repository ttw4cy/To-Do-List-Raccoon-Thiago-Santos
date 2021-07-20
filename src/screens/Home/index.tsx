import React from 'react';                           //Importacao do React
import { View } from 'react-native';                 //Importacao do React Native

import { Profile } from '../../components/Profile'; //Importacao da estrutura de profile
import { styles } from './styles';                  //importacao da estilizacao do aplicativo

export function Home (){                            //Criacao da funcao principal Home
    return (
        <View style={styles.container}>             
            <View style= {styles.header}>
            <Profile/>

            </View>
        </View>
    );
}