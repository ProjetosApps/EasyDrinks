import axios from 'axios';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export class DrinksRest {

    static getDrinksByCategory(category){
    	
    	let url = `${baseUrl}/filter.php?c=${category}`;

        return  axios.get(url) 
       
    }
    

    static getDrinkById(idDrink){
    	
    	let url = `${baseUrl}/lookup.php?i=${idDrink}`;

        return  axios.get(url) 
       
    }

}

