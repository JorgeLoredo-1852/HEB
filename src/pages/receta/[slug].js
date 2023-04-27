import React, { useState } from "react";
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from "@/molecules/recipeTabs/RecipeTabs";
import IngredientList from "@/components/ingredientList/ingredientList";
import RecipeSteps from "@/components/recipeSteps/recipeSteps";
import { GetCollection, GetItem } from "../../api/firebase";

const Receta = () => {
  const [tab, setTab] = useState(0);
  const foodList = GetCollection("Ingredientes");
  const Pasos = GetItem("Recetas", 1);

  const handleChange = (val) => {
    setTab(val);
  };

  return (
    <div>
      <HeaderImg
        imagen="/images/burger.jpg"
        height="240px"
        texto="Hamburguesa"
      />
      <RecipeTabs handleChange={handleChange} />
      {tab == 0 ? (
        <IngredientList foodLists={foodList} />
      ) : (
        <RecipeSteps pasosList={Pasos[0].pasos} />
      )}
    </div>
  );
};

export default Receta;
