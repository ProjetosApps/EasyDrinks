import React from 'react'
import { View, Modal, TouchableWithoutFeedback, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native'

import styles from './styles'

import { ButtonFilterFast } from '..';
import { fonts, colors } from '../../styles';

import TouchableScale from 'react-native-touchable-scale';
export const FilterModal = props => {

	let { modalVisible =  false, filter =  {}, arrayOfIgradients = [], arrayOfGlass = []} = props;
 
	return(
	    <Modal
	          animationType="fade"
	          transparent
	          visible={modalVisible}
	          onRequestClose={props._onCancel}>

			<TouchableWithoutFeedback onPress={props._onCancel} useForeground >
				<View style={styles.containerBlack}>


					
					<TouchableWithoutFeedback onPress={() => false } useForeground >
						<View style={styles.containerWhite}>
               
              <View style={{flex: 1,  }} >
                <View style={styles.containerHeaderModal} >
                  
                  <Text style={styles.textLabelInfos}>Filter by: </Text>


                  <TouchableScale onPress={props._onCancel} 
                              activeScale={0.99}  
                              style={styles.buttonClearFilter} >
                    <Text style={[styles.textClearFilter, {color: (props.filter.filterValue !== '')? colors.primary : '#ddd' }]}>Clear Filter</Text>
                  </TouchableScale>


                </View>

              
                <View style={{}} >
                  <View style={styles.headerInfos} >
                              
                    <View style={styles.tick} />

                    <View style={styles.containerLabelInfos} >
                      <Text style={styles.textLabelInfos}>Glass:</Text>
                    </View>

                  </View>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                   
                    {arrayOfGlass.length === 0 &&
                    <View style={{height: 30, width: 300, alignItems: 'center', justifyContent: 'center', }}>
                        <ActivityIndicator size="small" color={colors.primary} />
                    </View>}
                   
                    
                    <View style={styles.containerListOfGlass}>
                     {arrayOfGlass.map( item => (
                      <ButtonFilterFast label={item.strGlass} 
                                        style={styles.buttonFastFilter} 
                                        onPress={() => props._setFilter(item.strGlass, 'glass')}
                                        colorNoChecked={'#F0F0F0'}
                                        checked={(item.strGlass === filter.filterValue)? true : false}
                                        />
                                        ))}
                    </View>
                  
                  </ScrollView>
                </View>
              
                <View style={{ flex: 1,}} >

                  <View style={styles.headerInfos} >
                              
                    <View style={styles.tick} />

                    <View style={styles.containerLabelInfos} >
                      <Text style={styles.textLabelInfos}>Igradient:</Text>
                    </View>

                  </View>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={[styles.containerListOfIgradients]}>

                    {arrayOfIgradients.length === 0 &&
                    <View style={{height: 40, width: 300, alignItems: 'center', justifyContent: 'center', }}>
                        <ActivityIndicator size="small" color={colors.primary} />
                    </View>}
    
                    {arrayOfIgradients.map( item => (
                      <ButtonFilterFast label={item.strIngredient1} 
                                        style={styles.buttonFastFilter} 
                                        colorNoChecked={'#F0F0F0'}
                                        onPress={() => props._setFilter(item.strIngredient1, 'igradient')}
                                        checked={(item.strIngredient1 === filter.filterValue)? true : false}
                                        />
                                        ))}
                    </View>
                  
                  </ScrollView>
                </View>
              </View>
              
                        


              <View style={styles.footerModal}>
               
                <TouchableScale onPress={() => props._onCancel(true)} 
                              activeScale={0.99} 
                              style={styles.btnCancel} >
                  <Text style={styles.textCancel}>Cancel</Text>
                
                </TouchableScale>

                <TouchableScale onPress={props._onFilter} 
                                activeScale={0.99} 
                                style={styles.btnApplyFiter} >
                  
                  <Text style={styles.textApplyFilter}>Apply Filter</Text>
                </TouchableScale>

              </View>

						</View>
					</TouchableWithoutFeedback>



				</View>
			</TouchableWithoutFeedback>



		</Modal>
	);
	
}
