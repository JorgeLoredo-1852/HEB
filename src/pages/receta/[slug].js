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
                    foodLists.map((itemData) => (
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
                                            <IconButton sx={{mx: 2}} aria-label="AddCircleRoundedIcon" variant="plain" size="lg" color="danger">
                                                <AddCircleRoundedIcon sx={{ fontSize: "50px" }}/>
                                            </IconButton>
                                        }>
                                            <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                                <Box component="img" src={itemData.img} sx={{ maxWidth: "100%", height: "80px" }}></Box>
                                            </ListItemDecorator>
                                            <Stack spacing={0.1}>
                                                <Box style={{ fontWeight: "500"}}>{itemData.item}</Box>
                                                <Box style={{ fontSize: "13px"}}>{itemData.qty}</Box>
                                                <Box style={{ fontWeight: "700", fontSize: "15px" }}>{itemData.price}</Box>
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
                                        <ListItem sx={{ display: "flex", alignItems: "flex-start"}}>
                                            <ListItemDecorator>
                                                <div className={styles.number}>{nPaso}</div>
                                            </ListItemDecorator>
                                            <Stack>
                                                <Box style={{ fontWeight: "500"}}>{pasosData.text}</Box>
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
    return (
      <div>
        <HeaderImg imagen = "/images/burger.jpg" height = "500px" texto = "Hamburguesa"/>
        <FoodListComponent foodLists={itemData} />
        <PasosComponent pasosList={pasosData} />
      </div>)
}

export default Receta
