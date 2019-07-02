import React from 'react';
import { View, Text, } from 'react-native';

import styles from './styles';

import { Actions } from 'react-native-router-flux';

import { Icon } from '..'; 
import TouchableScale from 'react-native-touchable-scale';

export const CustomHeader = props => {

  let { label } = props;
	
	return(

        <View style={{ justifyContent: "flex-start"}} >
          
          <View style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 10, }} >
              
              <TouchableScale onPress={() => Actions.pop()} 
                              style={styles.buttonBack}
                              activeScale={0.98}>

                  <Icon name='left-arrow' 
                        size={15} 
                        style={{color: '#FFF'}}
                        />
              
              </TouchableScale>


              <View style={styles.containerText}>

                  <Text numberOfLines={1} style={styles.textLabel}>{label}</Text>
              
              </View>

            </View>

        </View>
    );
  }