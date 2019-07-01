import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { styles, colors, fonts } from '../../styles';

import { Container, ChooseCategoryButton } from '../../components';

export default class Category extends PureComponent {

     render() {

        return( 
            <Container noHeader >
	            
	            <View style={styles.containerHeaderCategory}>
		            <View> 
						<Image source={require('../../assets/icons/pina-colada.png')} style={styles.iconLogo} /> 
	            	</View>
		            
		            <View style={styles.containerTextHeaderCategory}>
			            <Text style={styles.textEasey}>Easy</Text>
			            <Text style={styles.textDrinks}>Drinks</Text>
		            </View>
		            
	            </View>

	            <View style={styles.bodyCategory}>
				
					<ChooseCategoryButton icon={<Image source={require('../../assets/icons/martini.png')} style={styles.iconCategory} />} 
					                      label={'Drinks Montados'}
					                      onPress={()=> Actions.Drinks({category: 'Ordinary_Drink', titleScreen: 'Drinks Montados'})}/>
		            
					<ChooseCategoryButton icon={<Image source={require('../../assets/icons/cocktail.png')} style={styles.iconCategory} />} 
					                      label={'Coqueteis'}
					                      onPress={()=> Actions.Drinks({category: 'Cocktail',  titleScreen:'Coqueteis' })}/>
	            
	            </View>

            </Container>
        );
    }
}

