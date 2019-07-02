import axios from 'axios';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export class DrinksRest {

    static getDrinksByCategory(category){
    	
    	let url = `${baseUrl}/filter.php?c=${category}`;

        return  axios.get(url) 
       
    }
 
    
    static getDrinksAlcoholic(alcoholic){
    	
    	let url = `${baseUrl}/filter.php?a=${alcoholic}`;

        return  axios.get(url) 
       
    }

    static getDrinkById(idDrink){
    	
    	let url = `${baseUrl}/lookup.php?i=${idDrink}`;

        return  axios.get(url) 
       
    }

    static getListOfIgradients(){
    	
    	let url = `${baseUrl}/list.php?i=list`;

        return  axios.get(url) 
       
    }
    
    static getListOfGlass(){
    	
    	let url = `${baseUrl}/list.php?g=list`;

        return  axios.get(url) 
       
    }
    
    static getDrinksGlass(glass){
    	
    	let url = `${baseUrl}/filter.php?g=${glass}`;

        return  axios.get(url) 
       
    }

    static getDrinksIgradient(igradient){
    	
    	let url = `${baseUrl}/filter.php?i=${igradient}`;

        return  axios.get(url) 
       
    }


}

