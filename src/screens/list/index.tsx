

import React from 'react';                                    //Importacao do React
import {View, Text, Image, StatusBar} from 'react-native';    //Importacao do React Native
import { useNavigation } from '@react-navigation/native';     //Importacao do React Navigation

import { ButtonIcon } from '../../components/ButtonIcon';     //Importacao do botao criado em componentes
import { styles } from './styles';                            //importacao da estilizacao do aplicativo
import IllustrationImg from '../../assets/Illustration.png';  //Importacao da imagem de fundo




export function List(){                                       //Criacao da funcao principal LIST
  const navigation = useNavigation();                         
    

  function headleIniciar() {                                  //Criacao da funcao navigate para botao iniciar
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>                           


        <Image                                                
        source={IllustrationImg}  
        style={styles.image}
        resizeMode= "contain"
        />
        <Text style ={styles.title}>
          
        </Text>
        <ButtonIcon                                           
        title="Iniciar"
        onPress={headleIniciar}
        activeOpacity={0.7}
        /> 


    </View>
  );
}