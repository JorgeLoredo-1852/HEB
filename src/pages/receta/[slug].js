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
const foodData = [
]

function Write(){
    const [users, setUsers] = useState([]);
    const userCollectionReference = collection(db, "Ingredientes");
    

    useEffect(() => {
    const getUsers = async () =>{
        const data = await getDocs(userCollectionReference);
        setUsers(data.docs.map((doc) => ({...doc.data()})))
        users.map((user) => {
            let food = {
                "price": user.precio,
                "item": user.nombre,
                "qty": user.cantidad,
                "img": user.imagen,
            }
            foodData.push(food);
        })
    }
    getUsers()
    }, []);
}

const pasosData = [
    {
        png: "https://assets.stickpng.com/images/58c5804d09e8bc1b42c77940.png",
        text: "Paso 1",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eo_circle_red_white_number-2.svg/2048px-Eo_circle_red_white_number-2.svg.png",
        text: "Paso 2",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-3.svg/1200px-Eo_circle_red_white_number-3.svg.png",
        text: "Paso 3",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-4.svg/1200px-Eo_circle_red_white_number-4.svg.png",
        text: "Paso 4",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-5.svg/1200px-Eo_circle_red_white_number-5.svg.png",
        text: "Paso 5",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-6.svg/1200px-Eo_circle_red_white_number-6.svg.png",
        text: "Paso 6",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-7.svg/1200px-Eo_circle_red_white_number-7.svg.png",
        text: "Paso 7",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-8.svg/1200px-Eo_circle_red_white_number-8.svg.png",
        text: "Paso 8",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-9.svg/1200px-Eo_circle_red_white_number-9.svg.png",
        text: "Paso 9",
    },
    {
        png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eo_circle_red_white_number-10.svg/1200px-Eo_circle_red_white_number-10.svg.png",
        text: "Paso 10",
    },
]

const itemData = [
    {
        item: "Heinz Catsup",
        qty: "500ml",
        price: "$50.00",
        img: "https://d167y3o4ydtmfg.cloudfront.net/krafts/303/1620226425821_750x750.png"
    },
    {
        item: "Heinz Mustard",
        qty: "500ml",
        price: "$50.00",
        img: "https://cdn.allotta.io/image/upload/v1666108958/dxp-images/heinz/products/100naturalyellowmustard-00013000002127-en-US.png"
    },
    {
        item: "Heinz Catsup",
        qty: "500ml",
        price: "$50.00",
        img: "https://d167y3o4ydtmfg.cloudfront.net/krafts/303/1620226425821_750x750.png"
    },
    {
        item: "Heinz Mustard",
        qty: "500ml",
        price: "$50.00",
        img: "https://cdn.allotta.io/image/upload/v1666108958/dxp-images/heinz/products/100naturalyellowmustard-00013000002127-en-US.png"
    },
    {
        item: "Heinz Catsup",
        qty: "500ml",
        price: "$50.00",
        img: "https://d167y3o4ydtmfg.cloudfront.net/krafts/303/1620226425821_750x750.png"
    },
    {
        item: "Heinz Mustard",
        qty: "500ml",
        price: "$50.00",
        img: "https://cdn.allotta.io/image/upload/v1666108958/dxp-images/heinz/products/100naturalyellowmustard-00013000002127-en-US.png"
    },
    {
        item: "Heinz Catsup",
        qty: "500ml",
        price: "$50.00",
        img: "https://d167y3o4ydtmfg.cloudfront.net/krafts/303/1620226425821_750x750.png"
    },
    {
        item: "Heinz Mustard",
        qty: "500ml",
        price: "$50.00",
        img: "https://cdn.allotta.io/image/upload/v1666108958/dxp-images/heinz/products/100naturalyellowmustard-00013000002127-en-US.png"
    },
    {
        item: "Heinz Catsup",
        qty: "500ml",
        price: "$50.00",
        img: "https://d167y3o4ydtmfg.cloudfront.net/krafts/303/1620226425821_750x750.png"
    },
    {
        item: "Heinz Mustard",
        qty: "500ml",
        price: "$50.00",
        img: "https://cdn.allotta.io/image/upload/v1666108958/dxp-images/heinz/products/100naturalyellowmustard-00013000002127-en-US.png"
    },
]

function FoodListComponent(props) {
    const foodLists = props.foodLists;
    Write()

    return (
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
                    foodLists.map((foodData) => (
                        <Box>
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
                                                <Box component="img" src={foodData.img} sx={{  maxWidth: "100px", height: "80px" }}></Box>
                                            </ListItemDecorator>
                                            <Stack spacing={0.1}>
                                                <Box style={{ fontWeight: "500" }}>{foodData.item}</Box>
                                                <Box style={{ fontSize: "13px" }}>{foodData.qty}</Box>
                                                <Box style={{ fontWeight: "700", fontSize: "15px" }}>${foodData.price}</Box>
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

    return (
        <div>
            <List
                aria-labelledby="basic-list-demo"
                variant="outlined"
                sx={{
                    my: 5,
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
    
    const handleChange = (val) => {
        setTab(val)
    }

    return (
        
        <div>
            
            <HeaderImg imagen="/images/burger.jpg" height="240px" texto="Hamburguesa" />
            <RecipeTabs handleChange={handleChange} />
            {
                tab == 0 ? <FoodListComponent foodLists={foodData} /> : <PasosComponent pasosList={pasosData} />
            }
        </div>)
}

export default Receta
