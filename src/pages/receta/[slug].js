import React, { useState } from "react";
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from "@/molecules/recipeTabs/RecipeTabs";
import IngredientList from "@/components/ingredientList/ingredientList";
import RecipeSteps from "@/components/recipeSteps/recipeSteps";
import { GetCollection, GetItem, GetItemArray } from '../../api/firebase';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../api/firebase";

const Receta = () => {
  const [tab, setTab] = useState(0);  
  const router = useRouter();  
  const {slug} = router.query

  const [docsPasos, setDocsPasos] = useState([]);
  const [docsIngredients, setDocsIngredientes] = useState([])

  const collectionReference1 = collection(db, "Recetas");
  const collectionReference2 = collection(db, "Ingredientes");

  const getItem = async() => {
    const q = query(collectionReference1, where("id", "==", parseInt(slug)));
    const data = await(getDocs(q))
    setDocsPasos(data.docs.map((doc) => ({...doc.data()})))
  } 

  const getItemArray = async() =>  {
    const q = query(collectionReference2, where("id", "in", docsPasos[0].ingredientes)); 
    const data = await(getDocs(q))
    setDocsIngredientes(data.docs.map((doc) => ({...doc.data()})))
}
  useEffect(() => {
    if(!slug) {
      return;
    }
    getItem();
  }, [slug]);
  
  useEffect(() => {
    if(!slug){
      return
    }
    if(docsPasos.length > 0){
      getItemArray();
    }
  }, [docsPasos])
  
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
        <IngredientList foodLists={docsIngredients} />
      ) : (
        <RecipeSteps pasosList={docsPasos} />
      )}
    </div>
  );
};

export default Receta;
