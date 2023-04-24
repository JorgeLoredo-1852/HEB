import { Typography, Box } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import React, { useState } from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import ListDivider from '@mui/joy/ListDivider';
import IconButton from '@mui/joy/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import HeaderImg from "@/molecules/header/HeaderImg";
import styles from "./receta.module.css";
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';


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

function FoodListComponent(props) {
    
    var foodLists = props.foodLists; 

    return  foodLists.length == 0 ? <div> Loading... </div> : (
        <div>
            <List
                aria-labelledby="basic-list-demo"
                variant="outlined"
                sx={{
                    mb: 5,
                    bgcolor: 'background.body',
                    '--ListItemDecorator-size': '50px',
                    '--ListItem-paddingLeft': '1.5rem',
                    '--ListItem-paddingRight': '1rem',
                }} 
            >
                {
                    foodLists.map((foodData, i) => (
                        <Box key={i}>
                            <List
                                sx={{  
                                    width: "100%", 
                                    bgcolor: 'background.body',
                                }}
                            >
                                <ListItem nested>
                                    <List>
                                        <ListItem endAction={
                                            <IconButton sx={{ mx: 2 }} aria-label="AddCircleRoundedIcon" variant="plain" size="lg" color="danger">
                                                <AddCircleRoundedIcon sx={{ fontSize: "50px" }} />
                                            </IconButton>
                                        }>
                                            <ListItemDecorator sx={{ alignItems: "center", display: "flex", justifyContent: 'center',width: "100px"}}>
                                                <Box component="img" src={foodData.imagen} sx={{  maxWidth: "100px", height: "80px" }}></Box>
                                            </ListItemDecorator>
                                            <Stack spacing={0.1}>
                                                <Box style={{ fontWeight: "500" }}>{foodData.nombre}</Box>
                                                <Box style={{ fontSize: "13px" }}>{foodData.cantidad}</Box>
                                                <Box style={{ fontWeight: "700", fontSize: "15px" }}>${foodData.precio}</Box>
                                            </Stack>
                                        </ListItem>
                                        <ListDivider inset="gutter" />
                                    </List>
                                </ListItem>
                            </List>
                        </Box>
                    ))
                }
            </List>
        </div>
    );
} 

function PasosComponent(props) {
    const pasosList = props.pasosList;
    let nPaso = 0

    return pasosList == 0? <div> Loading... </div> : (
        <div>
            <List
                aria-labelledby="basic-list-demo"
                variant="outlined"
                sx={{
                    mb: 5,
                    bgcolor: 'background.body',
                    '--ListItemDecorator-size': '32px',
                    '--ListItem-paddingLeft': '1.5rem',
                    '--ListItem-paddingRight': '1rem',
                }}
            >
                {
                    pasosList.map((pasosData, i) => {

                        nPaso = nPaso + 1

                        return <Box key = {i}>
                            <List
                                sx={{
                                    width: "100%",
                                    bgcolor: 'background.body',
                                }}
                            >
                                <ListItem nested>
                                    <List>
                                        <ListItem sx={{ display: "flex", alignItems: "flex-start" }}>
                                            <ListItemDecorator>
                                                <div className={styles.number}>{nPaso}</div>
                                            </ListItemDecorator>
                                            <Stack>
                                                <Box style={{ fontWeight: "500" }}>{pasosData}</Box>
                                            </Stack>
                                        </ListItem>
                                        <ListDivider inset="gutter" />
                                    </List>
                                </ListItem>
                            </List>
                        </Box>
                    })
                }
            </List>
        </div>
    );
}

const Receta = () => {
    
    
    const [tab, setTab] = useState(0)
    const foodList = GetCollection("Ingredientes");
    const Pasos = GetItem("Recetas", 0);
    const handleChange = (val) => {
        setTab(val)
    }
    

    return (
        
        <div>
            
            <HeaderImg imagen="/images/burger.jpg" height="240px" texto="Hamburguesa" />
            <RecipeTabs handleChange={handleChange} />
            {
                tab == 0 ? <FoodListComponent foodLists={foodList} /> : <PasosComponent pasosList={Pasos[0].pasos} /> 
            }
        </div>)
}

export default Receta
