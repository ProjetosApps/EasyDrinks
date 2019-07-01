import React, { Component } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, ImageBackground, StatusBar } from 'react-native';

import { connect } from 'react-redux';

import { styles, colors } from '../../styles';

import { GradientContainer,Icon } from '../../components';

import AutoResponsive from 'autoresponsive-react-native';

import TouchableScale from 'react-native-touchable-scale';

import { DrinksRest } from '../../services'

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


    render() {
        
        let { drink, loading } = this.state;

        return( 
            <GradientContainer style={{flex: 1}} >

            
                <ImageBackground blurRadius={0.5} source={{uri: drink.strDrinkThumb}} style={{width: '100%', height: 240}}>
                
                    <View style={{height: 240, paddingTop: 30,  }}>

                      
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <View style={{height: 30, width: 30, borderRadius: 5, backgroundColor: "#FFbF7c"}}>
                            <Icon name='left-arrow' size={22} style={{color: '#FFF'}}/>
                        </View>

                        
                        <View style={{height: 30, borderRadius: 5, }}>
                        
                            <Text style={{color: '#FFF'}}>{drink.strDrink}</Text>
                        
                        </View>

                      </View>


                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{height: 30, borderRadius: 5, backgroundColor: "#FFbF7c"}}><Text>Some Text</Text></View>
                        <View style={{height: 30, borderRadius: 5, backgroundColor: "#FFbF7c"}}><Text>Some Text</Text></View>
                        <View style={{height: 30, borderRadius: 5, backgroundColor: "#FFbF7c"}}><Text>Some Text</Text></View>
                      </View>
                    
                    </View>
                </ImageBackground>

            
                <View style={[styles.bodyWhite, { marginTop: -15}]}>


                    {loading &&
                    <ActivityIndicator size="large" color={colors.primary} />}

                    {drink.strVideo && <View style={{height: 100, width: 100, backgroundColor: 'blue'}} />}



                </View>

            </GradientContainer>

        );
    }
}
