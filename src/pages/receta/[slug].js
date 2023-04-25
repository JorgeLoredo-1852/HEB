import React, { useState } from 'react';
import HeaderImg from "@/molecules/header/HeaderImg";
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import IngredientList from '@/components/ingredientList/ingredientList';
import itemList from '@/components/ingredientList/itemList';
import RecipeSteps from '@/components/recipeSteps/recipeSteps';
import steps from '@/components/recipeSteps/steps';
import BigButton from '@/atoms/buttonBig/buttonBig';

const firebaseConfig = {
  apiKey: "AIzaSyCWT4mLjto-JRexnFS99V5BZNGPE0YBOzs",
  authDomain: "heb-go.firebaseapp.com",
  databaseURL: "https://heb-go-default-rtdb.firebaseio.com",
  projectId: "heb-go",
  storageBucket: "heb-go.appspot.com",
  messagingSenderId: "855494035420",
  appId: "1:855494035420:web:83d130a72d5b73f01db119",
  measurementId: "G-TYR8D6KKNZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function GetCollection(col){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col); // Referencia para la coleccion que quieres

    const getCollection = async() => {
        const data = await(getDocs(collectionReference)); // Esta funcion hace la call
        setDocs(data.docs.map((doc) => ({...doc.data()}))) // mapea la informacion de los documentos a variable docs
    }

    useEffect(() => {
        getCollection(); 
    }, []);

    return docs; // Regresa el arreglo con informacion de docs
}

function GetItem(col, id){
    const [docs, setDocs] = useState([]);
    const collectionReference = collection(db, col);

    const q = query(collectionReference, where("id", "==", id));

    const getItem = async() => {
        const data = await(getDocs(q))
        setDocs(data.docs.map((doc) => ({...doc.data()})))
    } 

    useEffect(() => {
        getItem();
    }, []);

    return docs;
}


const Receta = () => {
    
    
    const [tab, setTab] = useState(0)
    const foodList = GetCollection("Ingredientes");
    const Pasos = GetItem("Recetas", 0);
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
            tab == 0 ?  <IngredientList foodLists={foodList} /> : <RecipeSteps pasosList={Pasos[0].pasos} />
        }
        <BigButton color="main" callback={onClick} position="fixed" text="Ver mi Lista"/>
      </div>)
}

export default Receta
