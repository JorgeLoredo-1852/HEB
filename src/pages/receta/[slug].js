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
import RecipeTabs from '@/molecules/recipeTabs/RecipeTabs';

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
    const [small, setSmall] = React.useState(false);

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

const Receta = () => {
    const [tab, setTab] = useState(0)

    const handleChange = (val) => {
        setTab(val)
    }

    return (
      <div>
        <HeaderImg imagen = "/images/burger.jpg" height = "240px" texto = "Hamburguesa"/>
        <RecipeTabs handleChange = {handleChange}/>
        {
            tab == 0 ?  <FoodListComponent foodLists={itemData} /> : <div>Pasos</div>
        }
      </div>)
}

export default Receta
