import React from 'react';                 //Importacao do React
import { View, Text } from 'react-native'; //Importacao do React Native

import { Avatar } from '../Avatar';        //Importacao do Avatar
import { styles } from './styles';         //importacao da estilizacao do aplicativo

export function Profile () {               //Funcao principal responsavel por criar o Profile 
    return (
        <View style={styles.container}> 
        
            <Avatar urlImage="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"/>

            <View>

                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá, { }
                    </Text>

                    <Text style={styles.username}>
                         Usuário
                    </Text>

                </View>
                    <Text style={styles.message}>
                        Otimo dia!
                    </Text>

            </View>
        </View>
    )
}