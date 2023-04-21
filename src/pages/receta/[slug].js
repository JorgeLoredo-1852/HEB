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
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


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

function Write(){
    const [users, setUsers] = useState([]); 
    const userCollectionReference = collection(db, "Ingredientes");
    
    const getUsers = async () =>{ 
        const data = await getDocs(userCollectionReference);
        setUsers(data.docs.map((doc) => ({...doc.data()}))) 
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    /*console.log(users)*/
    return users;
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
                    pasosList.map((pasosData) => {

                        nPaso = nPaso + 1

                        return <Box>
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
                                                <Box style={{ fontWeight: "500" }}>{pasosData.text}</Box>
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
    const foodL = Write();
    const pasosData = [];
    const handleChange = (val) => {
        setTab(val)
    }
    

    return (
        
        <div>
            
            <HeaderImg imagen="/images/burger.jpg" height="240px" texto="Hamburguesa" />
            <RecipeTabs handleChange={handleChange} />
            {
                tab == 0 ? <FoodListComponent foodLists={foodL} /> : <PasosComponent pasosList={pasosData} /> 
            }
        </div>)
}

export default Receta
