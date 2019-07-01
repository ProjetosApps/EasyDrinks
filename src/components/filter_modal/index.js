import React from 'react'
import { View, Text, Image, Modal, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import { colors } from '../../styles' 

export const FilterModal = props => {

	let { modalVisible =  false, } = props;
	
	return(
	    <Modal
	          animationType="slide"
	          transparent
	          visible={modalVisible}
	          onRequestClose={props._setModal}>

			<TouchableWithoutFeedback onPress={props._setModal} useForeground >
				<View style={{flex: 1, backgroundColor: 'rgba(10, 10, 10, 0.5)', justifyContent: 'center' }}>


					
					<TouchableWithoutFeedback onPress={() => false } useForeground >
						<View style={{height: 300, backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 30, }}>


						</View>
					</TouchableWithoutFeedback>



				</View>
			</TouchableWithoutFeedback>



		</Modal>
	);
	
}
