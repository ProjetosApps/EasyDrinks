import React from 'react'
import { View, Text, Image, } from 'react-native'

import styles from './styles'

import { colors } from '../../styles' 

export const ListEmpty = props => {

	let { loading } = props;
	
	if(loading){
		return(<View /> )
	}else{

 		return(
 				<View style={styles.container}>

	                <View style={styles.containerImage}>

	                    <Image source={require('../../assets/images/telescope.png')} style={styles.image} />

	                </View>

	                <Text style={styles.textHeader}>Tudo limpo!</Text>
	                <Text style={styles.textMensage}>Nenhum drink foi encontrado.</Text>

        		</View>)
	}

}
