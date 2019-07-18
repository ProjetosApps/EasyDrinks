import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView, Dimensions } from 'react-native';

import styles from './styles';
import { styles as stylesDefault, colors, fonts } from '../../styles';

import { GradientContainer, Icon, CustomHeader } from '../../components';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import { DrinksRest } from '../../services';


export default class Drink_Details extends Component {
    constructor(props){
        super(props);

        this.state={ drink: {}, loading: true };
    }

    componentDidMount(){
        this._getDetails()
    }


    async _getDetails(){
        let { idDrink } = this.props;

        await DrinksRest.getDrinkById(idDrink)
        
        .then(res => { this.setState({ loading: false, drink: res.data.drinks[0]}); } )
        
        .catch(err =>{ this.setState({ loading: false }); } );

    }

    _returnIgradients(drink){
      let arrayIgradients = [];
      for(let[key, value] of Object.entries(drink)){
        
        if(key.includes('strIngredient') && value !== ''){
  
          arrayIgradients.push(<View key={key}  style={{alignItems: 'flex-start', height: 30,}}>
                                    <Text style={styles.textInfos}>{value}</Text>
                              </View>)
 
        }
      }

      return arrayIgradients;
    }

    _returnMeasure(drink){
      let arrayMeasure = [];
      for(let[key, value] of Object.entries(drink)){
        
        if(key.includes('strMeasure') && value.trim() !== '' && value !== null){
          arrayMeasure.push(<View key={key} style={{alignItems: 'flex-end', height: 30,}} >
                                <Text style={styles.textInfos}>{value}</Text>
                            </View>)
 
        }
      }

      return arrayMeasure;
    }


    render() {
        
        let { drink, loading } = this.state;

        return( 
            <GradientContainer style={{flex: 1}} >

            <ParallaxScroll
                  isHeaderFixed
                  headerHeight={60}
                  parallaxHeight={240} 
                  parallaxBackgroundScrollSpeed={5}
                  parallaxForegroundScrollSpeed={2.5}
                  fadeOutParallaxBackground
                  headerFixedBackgroundColor={colors.primary}
                  renderHeader={() => <CustomHeader label={drink.strDrink}/>}                 
                  renderParallaxForeground={() => <View style={{height: 240, paddingTop: 30, justifyContent: "flex-end"  }} />}
                  renderParallaxBackground={() => <Image blurRadius={0.5} source={{uri: drink.strDrinkThumb}} style={{width: '100%', height: 240}} /> }
                >
                
                <View style={styles.bodyWhite}>

                    {loading &&
                    <ActivityIndicator size="large" color={colors.primary} />}

                    <View style={styles.headerBody} >

                        {drink.strCategory &&
                        <View style={styles.labelText}>
                              <Text style={{color: '#e5b686'}}>{drink.strCategory}</Text>
                        </View>}

                        {drink.strIBA &&
                        <View style={styles.labelText}>
                              <Text style={{color: '#e5b686'}}>{drink.strIBA}</Text>
                        </View>}

                        {drink.strAlcoholic &&
                        <View style={styles.labelText}>
                              <Text style={{color: '#e5b686'}}>{drink.strAlcoholic}</Text>
                        </View>}

                        {drink.strGlass &&
                        <View style={styles.labelText}>
                              <Text style={{color: '#e5b686'}}>{drink.strGlass}</Text>
                        </View>}

                    </View>


                    <View style={styles.containerInfos} >
                      
                      <View style={styles.headerInfos} >
                        
                        <View style={styles.tick} />

                        <View style={styles.containerLabelInfos} >
                          <Text style={styles.textLabelInfos}>Ingradients</Text>
                        </View>

                      </View>



                      <View style={styles.bodyInfos} >

                        <View style={{flex: 1}}>
                          {this._returnIgradients(drink)}
                        </View>

                        <View style={{flex: 1}}>
                          {this._returnMeasure(drink)}
                        </View>

                      </View>


                    </View>


                    <View style={[styles.containerInfos, {marginVertical: 20 }]} >

                      <View style={styles.headerInfos} >
                        
                        <View style={styles.tick} />

                        <View style={styles.containerLabelInfos} >
                          <Text style={styles.textLabelInfos}>Instructions</Text>
                        </View>

                      </View>
       

                       <View style={styles.bodyInfos} >
                        <Text style={styles.textInfos}>{(drink.strInstructions !== '' && drink.strInstructions !== undefined )? drink.strInstructions : "No instructions."}</Text>
                      </View>


                    </View>
                </View>
                
                </ParallaxScroll>

            </GradientContainer>

        );
    }
}
