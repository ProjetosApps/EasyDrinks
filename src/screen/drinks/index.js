import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { _getDrinksByCategory, _getDrinksAlcoholic, _init, _getDrinksGlass, _getDrinksIgradient } from '../../actions';


import styles from './styles';
import { styles as stylesDefault, colors, fonts } from '../../styles';

import TouchableScale from 'react-native-touchable-scale';
import { GradientContainer, CardDrink, Icon, ListEmpty, FilterModal, Search, ButtonFilterFast } from '../../components';



class Drinks extends Component {
    constructor(props){
        super(props);

        this.state = { modalVisible: false, 
                       fastFilter: 'Alcoholic', 
                       nameFilter: '',
                       arrayDrinksFilterByName: [],
                       filter: { filterValue: '', type: '' },
                      };
    }

    componentDidMount(){
        let { arrayOfIgradients, arrayOfGlass } = this.props;

        this._refresh();

        if(arrayOfIgradients.length == 0 || arrayOfGlass.length == 0 || upadete )
          this.props._init();
    }


    _setModal = () => {

        this.setState({modalVisible: !this.state.modalVisible});

    }

    _onFilter = () => {
       if(this.state.type == 'glass')
          this.props._getDrinksGlass(this.state.filter.filterValue.split(' ').join('_'));
       else
          this.props._getDrinksIgradient(this.state.filter.filterValue.split(' ').join('_'));

      this._setModal()

    }

    _onCancel = () => {

      this.setState({filter: { filterValue: '', type: '' }});
      this._setModal();
    } 

    _setFilter = (filterValue, type) => {
      this.setState({filter: {filterValue: filterValue, type: type }});

    } 


    async _refresh(){
        let { category } = this.props;
        await this.props._getDrinksByCategory(category);

    }

    _setFastFilter(fastFilter = 'Alcoholic'){
      
      this.setState({fastFilter});
      
      if(fastFilter === 'Alcoholic') 
        this._refresh();
      else
        this.props._getDrinksAlcoholic(fastFilter);

      this.setState({nameFilter: ''});
      
    }

    _filterDrinkByName = (nameFilter = '' ) => {
       
        let { drinks } = this.props;
        let arrayDrinksFilterByName = drinks.filter(drink =>{
          return drink.strDrink.toLowerCase().includes(nameFilter.toLowerCase());
        });
        
        this.setState({arrayDrinksFilterByName, nameFilter});
    }

    render() {
        
        let { drinks, titleScreen, arrayOfIgradients, arrayOfGlass } = this.props;

        let { modalVisible, fastFilter, nameFilter, arrayDrinksFilterByName, filter } = this.state;

        return( 
            <GradientContainer style={{flex: 1}} >
            
                <View style={styles.containerHeader}>

                  <View style={stylesDefault.defaultLine}>

                    
                    <TouchableScale onPress={() => Actions.pop()} 
                                    style={styles.buttonBack}
                                    activeScale={0.98}>

                        <Icon name='left-arrow' 
                              size={15} 
                              style={{color: '#FFF'}}
                              />
                    
                    </TouchableScale>

                    
                    <View style={{marginLeft: 10, }}>
                        <Text style={styles.textTitleScreen}>{titleScreen}</Text>
                    </View>
                  
                  </View> 


                  <Search onChangeText={this._filterDrinkByName}
                          value={nameFilter}
                          style={styles.searchArea} />
                
                </View>


            
                <View style={styles.bodyWhite}>

                    <View style={styles.containerFastFilter}>
             

                        <ButtonFilterFast label={'Alcoholic'}
                                          style={styles.buttonFastFilter}
                                          onPress={() => this._setFastFilter('Alcoholic')}  
                                          checked={(fastFilter === 'Alcoholic')? true : false}/>

                        <ButtonFilterFast label={'Non Alcoholic'}  
                                          style={styles.buttonFastFilter} 
                                          onPress={() => this._setFastFilter('Non_Alcoholic')}
                                          checked={(fastFilter === 'Non_Alcoholic')? true : false}/>
 
                        <ButtonFilterFast label={'Optional Alcohol'} 
                                          style={styles.buttonFastFilter} 
                                          onPress={() => this._setFastFilter('Optional_alcohol')}
                                          checked={(fastFilter === 'Optional_alcohol')? true : false}/>
                    
                    </View>
                   
                    <FlatList data={(nameFilter !== '')? arrayDrinksFilterByName : drinks}
                              refreshing={this.props.loading}
                              onRefresh={() => this._refresh()}
                              ListEmptyComponent={() => <ListEmpty loading={this.props.loading} />}
                              renderItem={({item, index}) => <CardDrink onPress={() => Actions.Drink_Details({idDrink: item.idDrink}) } 
                                                                         item={item} index={index} /> }
                              />


                    <TouchableScale onPress={this._setModal} 
                                    style={styles.filterButton}
                                    activeScale={0.98} >

                        <Image tintColor={colors.primary} 
                               source={require('../../assets/icons/filter.png')}  
                               style={styles.iconFilter}
                               />
                    
                    </TouchableScale>

                </View>


                <FilterModal modalVisible={modalVisible} 
                             arrayOfIgradients={arrayOfIgradients}
                             arrayOfGlass={arrayOfGlass}
                             _onFilter={this._onFilter}
                             _onCancel={this._onCancel} 
                             _setModal={this._setModal}
                             _setFilter={this._setFilter} 
                             filter={filter}
                             />

            </GradientContainer>

        );
    }
}

const mapStateToProps = state => {
    let { drinks, loading, change, arrayOfIgradients, arrayOfGlass } = state.DrinksReducer;
    return ({ drinks, loading, change, arrayOfIgradients, arrayOfGlass  });
}

export default connect(mapStateToProps, { _getDrinksByCategory, _getDrinksAlcoholic, _init, _getDrinksGlass, _getDrinksIgradient })(Drinks);

