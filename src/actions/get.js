import { DrinksRest } from '../services'
// Alert.alert('Modal has been closed.');
export const _getDrinksByCategory = (category) => {

    return dispatch => {

        dispatch({ type: 'DRINKS_LOADING',  payload: '' });
        
        DrinksRest.getDrinksByCategory(category)
        
        .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'drinks' } }) })
        
        .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
    
    }
}


