import React, { Component, } from 'react';
import { ActivityIndicator, View, Text, Image, StatusBar, TouchableWithoutFeedback, } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon }  from '..';

class Header extends Component {
  // menu left position

  _menuLeft() { 

    // menu icon

    if (this.props.hasOwnProperty("menu") && this.props.menu) {

      return (
      
        <TouchableWithoutFeedback onPress={() => Actions.drawerOpen()}>

          <View style={styles.btnHead}>

            <Icon name='menu-three-horizontal-lines-symbol' size={22} style={{color: '#fff'}}/>

          </View>
  
        </TouchableWithoutFeedback>
         
      );

    }

    // arrow left

    return (
    
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>

        <View style={styles.btnHead}>

          <Icon name='left-arrow-2' size={22} style={{color: '#fff'}}/>

        </View>

      </TouchableWithoutFeedback>
    
    );

  }
  
  // menu center position

  _menuCenter() {

    // text

    if (this.props.hasOwnProperty("title") && this.props.title) {

      return <Text style={styles.headerText}>{this.props.title}</Text>;

    }

    // logo

    return (
    
      <View style={styles.logo}>  

          {/*<Icon name='eae7' size={22} style={{color: '#fff'}}/>*/}
         { <Image source={ require('../../assets/images/github_logo.png')} style={{width: 40, height: 40,}} />   }
 
      </View>    
          
    );    

  }

  // menu right position

  _menuRight() {

    if (this.props.hasOwnProperty("bell") && this.props.bell) {

      return (
        
        // bell &&
        <TouchableWithoutFeedback onPress={() => false }>

          <View style={styles.btnHead}>

              <Icon name='alarm' size={22} style={{color: '#fff'}}/>

                <View style={[styles.haveNotify,]}>

                    {/* { this.props.total_msg > 0 && this.props.total_msg <= 9 && <View style={styles.notify}>

                        <Text style={styles.numberNotify}>{this.props.total_msg}</Text>

                    </View>}
                    
                    { this.props.total_msg > 9 && <View style={styles.notify}>

                        <Text style={styles.numberNotify}>9+</Text>

                    </View>} */}

                </View>

            </View>

        </TouchableWithoutFeedback>
    
      );

    }

    return 


  }

  render() {
    if (this.props.hasOwnProperty("noHeader") && this.props.noHeader) return <View />

    else 
    return(

      <View style={[styles.header, { elevation: (this.props.removeElevation != undefined)? 0 : 5 }]}>

        <StatusBar backgroundColor={colors.primary} barStyle="light-content"/>


        <View style={[styles.headerViewLeft]}>

          {this._menuLeft()}

        </View>

        <View style={[styles.headerViewCenter]}>

          {this._menuCenter()}
  
        </View>
  
        <View style={[styles.headerViewRight]}>  
  
          {this._menuRight()}

        </View>

      </View>

    );

  }

}

const mapStateToProps = state => {
  return({ })
}

export default connect(mapStateToProps, {  })(Header);
