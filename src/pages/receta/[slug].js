import React, { useState } from 'react';
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';
import IngredientList from '@/components/ingredientList/ingredientList';
import RecipeSteps from '@/components/recipeSteps/recipeSteps';
import { useRouter } from 'next/router';
import { GetCollection, GetItem, GetItemArray } from '../../api/firebase';
import steps from '@/components/recipeSteps/steps';

const Receta = () => { 
    const [router, setRouter] = useState(useRouter());  
    const [tab, setTab] = useState(0);
    const recetaId = parseInt(router.asPath.split("/")[2]);
    /*console.log(recetaId);*/ 
    console.log(router.query);
    let Pasos = GetItem("Recetas", parseInt(router.asPath.split("/")[2]));
    const foodList = Pasos.length == 0 ? GetCollection("Ingredientes"):GetItemArray("Ingredientes", Pasos[0].ingredientes);
    /*(const foodList = GetItemArray("Ingredientes", Pasos[0].ingredientes); */
    const handleChange = (val) => {
        setTab(val)
    }    

    return ( 
      <div>
        <HeaderImg imagen = "/images/burger.jpg" height = "240px" texto = "Hamburguesa"/>
        <RecipeTabs handleChange = {handleChange}/>
        {
            tab == 0 ?  <IngredientList foodLists={foodList}/> : <RecipeSteps pasosList={Pasos} />
        }
        
      </div>) 
}

export default Receta
