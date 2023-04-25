import React, { useState } from 'react';
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';

import IngredientList from '@/components/ingredientList/ingredientList';
import itemList from '@/components/ingredientList/itemList';
import RecipeSteps from '@/components/recipeSteps/recipeSteps';
import steps from '@/components/recipeSteps/steps';
import BigButton from '@/atoms/buttonBig/buttonBig';

const Receta = () => {
    const [tab, setTab] = useState(0)

    const handleChange = (val) => {
        setTab(val)
    }

    const onClick = () => {

    }

    return (
      <div>
        <HeaderImg imagen = "/images/burger.jpg" height = "240px" texto = "Hamburguesa"/>
        <RecipeTabs handleChange = {handleChange}/>
        {
            tab == 0 ?  <IngredientList foodLists={itemList} /> : <RecipeSteps pasosList={steps} />
        }
        <BigButton color="main" callback={onClick} position="fixed" text="Ver mi Lista"/>
      </div>)
}

export default Receta
