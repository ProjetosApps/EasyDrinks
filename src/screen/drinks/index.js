import React, { Component } from 'react';
import { View, ScrollView, FlatList, Dimensions, Image, Text } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { styles, colors, fonts } from '../../styles';

import { GradientContainer, CardRepo, Icon, ListEmpty, FilterModal, Search } from '../../components';

import { _getDrinksByCategory } from '../../actions';

import TouchableScale from 'react-native-touchable-scale';

class Drinks extends Component {
    constructor(props){
        super(props);

        this.state = { modalVisible: false };
    }

    componentDidMount(){
        this._refresh()
    }


    _setModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }


    _refresh(){

        let { category, drinks } = this.props;
        this.props._getDrinksByCategory(category);

    }


    render() {
        
        let { drinks, titleScreen } = this.props;

        let { modalVisible } = this.state;

        return( 
            <GradientContainer style={{flex: 1}} >
            
                <View style={{height: 120, paddingHorizontal: 15, paddingTop: 10,  }}>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    
                    <TouchableScale onPress={() => Actions.pop()} 
                                    style={{height: 40, width: 40, borderRadius: 5, backgroundColor: "#FFbF7c", alignItems: 'center', justifyContent: 'center'}}
                                    activeScale={0.98}>
                        <Icon name='left-arrow' size={15} style={{color: '#FFF'}}/>
                    
                    </TouchableScale>

                    
                    <View style={{marginLeft: 10, }}>
                        <Text style={styles.textTitleScreen}>{titleScreen}</Text>
                    </View>
                  
                  </View> 

                  <Search style={{height: 45, borderRadius: 5, paddingLeft: 10, marginTop: 10, backgroundColor: '#fff'}} />
                
                </View>


            
                <View style={styles.bodyWhite}>

                    <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                       
                        <View style={styles.buttonFastFilter, { backgroundColor: "#FFF6ee",}}>
                            <Text style={{color: '#e5b686'}}>Some Text</Text>
                        </View>
                        
                        <View style={styles.buttonFastFilter}>
                            <Text style={{color: '#a6a4a2'}}>Some Text</Text>
                        </View>

                        <View style={styles.buttonFastFilter}>
                            <Text style={{color: '#a6a4a2'}}>Some Text</Text>
                        </View>
 
                    
                    </View>
                   
                    <FlatList data={drinks}
                              refreshing={this.props.loading}
                              onRefresh={() => this._refresh()}
                              ListEmptyComponent={() => <ListEmpty loading={this.props.loading} />}
                              renderItem={({item, index}) => <CardRepo onPress={() => Actions.Drink_Details({idDrink: item.idDrink})} 
                                                              item={item} index={index} /> }
                              />


                    <TouchableScale onPress={this._setModal} 
                                    style={styles.filterButton}
                                    activeScale={0.98}>

                        <Image tintColor={colors.primary} source={require('../../assets/icons/filter.png')}  style={{height: 22, width: 22}}/>
                    
                    </TouchableScale>

                </View>


                <FilterModal modalVisible={modalVisible} _setModal={this._setModal} />

            </GradientContainer>

        );
    }
}

const mapStateToProps = state => {
    let { drinks, loading, change } = state.DrinksReducer;
    return ({ drinks, loading, change  });
}

export default connect(mapStateToProps, { _getDrinksByCategory })(Drinks);

