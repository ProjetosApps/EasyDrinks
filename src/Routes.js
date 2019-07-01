import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Category from './screen/category'
import Drinks  from './screen/drinks'
import Drink_Details from './screen/drink_details';

export default props => {
  return(
    <Router>
    

      <Stack key='root' >        
         
        <Scene key="Category" component={Category} hideNavBar init />
        
        
        <Scene key="Drinks" component={Drinks} hideNavBar />


        <Scene key="Drink_Details" component={Drink_Details} hideNavBar />
     
      </Stack>
      
    </Router>
  );
}


