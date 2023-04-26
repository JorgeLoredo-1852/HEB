import React, { useState } from 'react';
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';
import IngredientList from '@/components/ingredientList/ingredientList';
import RecipeSteps from '@/components/recipeSteps/recipeSteps';
import { useRouter } from 'next/router';
import { GetCollection, GetItem } from '../../api/firebase';
import steps from '@/components/recipeSteps/steps';

const Receta = () => { 
    const [tab, setTab] = useState(0)
    const foodList = GetCollection("Ingredientes");
    const Pasos = GetItem("Recetas", 0);


    const handleChange = (val) => {
        setTab(val)
    }    

    return (
      <div>
        <HeaderImg imagen = "/images/burger.jpg" height = "240px" texto = "Hamburguesa"/>
        <RecipeTabs handleChange = {handleChange}/>
        {
            tab == 0 ?  <IngredientList foodLists={foodList} /> : <RecipeSteps pasosList={Pasos[0].pasos} />
        }
        
      </div>)
}

export default Receta
