import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from './styles';

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
			            <Text style={styles.textEasy}>Easy</Text>
			            <Text style={styles.textDrinks}>Drinks</Text>
		            </View>
		            
	            </View>

              <ScrollView>

                <View style={styles.bodyCategory}>
                  
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/martini.png')} 
                                                        style={styles.iconCategory} />}         
                                          label={'Ordinary Drink'}
                                          onPress={()=> Actions.Drinks({category: 'Ordinary_Drink', titleScreen: 'Ordinary Drink'}) }/>

                          
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/cocktail.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Cocktail'}
                                          onPress={()=> Actions.Drinks({category: 'Cocktail',  titleScreen:'Cocktail' })}/>


                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/milk.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Milk / Float / Shake'}
                                          onPress={()=> Actions.Drinks({category: 'Milk_/_Float_/_Shake',  titleScreen:'Milk / Float / Shake' })}/>

                        
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/shot.png')} 
                                                        style={styles.iconCategory} />}         
                                          label={'Shot'}
                                          onPress={()=> Actions.Drinks({category: 'Shot', titleScreen: 'Shot'}) }/>


                          
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/cocoa.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Cocoa'}
                                          onPress={()=> Actions.Drinks({category: 'Cocoa',  titleScreen:'Cocoa' })}/>

                        
                  
                  
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/coffee-cup.png')} 
                                                        style={styles.iconCategory} />}         
                                          label={'Coffee / Tea'}
                                          onPress={()=> Actions.Drinks({category: 'Coffee_/_Tea', titleScreen: 'Coffee / Tea'}) }/>
                          
                    
                    
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/homemade_liqueur.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Homemade Liqueur'}
                                          onPress={()=> Actions.Drinks({category: 'Homemade_Liqueur',  titleScreen:'Homemade Liqueur' })}/>
                        
                    
                    
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/beer.png')} 
                                                        style={styles.iconCategory} />}         
                                          label={'Beer'}
                                          onPress={()=> Actions.Drinks({category: 'Beer', titleScreen: 'Beer'}) }/>


                          
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/iced-tea.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Soft Drink / Soda'}
                                          onPress={()=> Actions.Drinks({category: 'Soft_Drink_/_Soda',  titleScreen:'Soft Drink / Soda' })}/>
                          
                  
                  
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/punch-bowl.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Punch / Party Drink'}
                                          onPress={()=> Actions.Drinks({category: 'Punch_/_Party_Drink',  titleScreen:'Punch / Party Drink' })}/>
                          
                   
                   
                    <ChooseCategoryButton icon={<Image source={require('../../assets/icons/more.png')} 
                                                        style={styles.iconCategory} />} 
                                          label={'Other / Unknown'}
                                          onPress={()=> Actions.Drinks({category: 'Other/Unknown',  titleScreen:'Other / Unknown' })}/>
                        
                </View>
              </ScrollView>

            </Container>
        );
    }
}

