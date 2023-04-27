import { Box } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import React from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Stack from '@mui/joy/Stack';
import ListDivider from '@mui/joy/ListDivider';
import IconButton from '@mui/joy/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import BigButton from '@/atoms/buttonBig/buttonBig';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useContext } from 'react';
import ListContext from '@/hooks/ListContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function IngredientList(props) {
    const foodLists = props.foodLists;
    const pasoList = props.pasos;
    const { listInfo, setListInfo } = useContext(ListContext)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({...listInfo})
    }, [])
    
    const router = useRouter();

    const onClick2 = () => {
        router.push('/list')
    }


    const onClick = () => {
        foodLists.map((ingredient) => {
            if (data.hasOwnProperty(`${ingredient.nombre}`)) {
                data[`${ingredient.nombre}`] = {...data[`${ingredient.nombre}`], quantity: data[`${ingredient.nombre}`]['quantity'] + 1}
            } else {
                data[`${ingredient.nombre}`] = {...ingredient, quantity: 1}
            }
        })
        setListInfo({...listInfo, ...data})
    }
    
    //console.log(listInfo)

    const onClickUnit = (itemData) => {
        if (data.hasOwnProperty(`${itemData.nombre}`)) {
            data[`${itemData.nombre}`] = {...data[`${itemData.nombre}`], quantity: data[`${itemData.nombre}`]['quantity'] + 1}
        } else {
            data[`${itemData.nombre}`] = {...itemData, quantity: 1}
        }
        setListInfo({...listInfo, ...data})
    }

    return (
        <div>
            <BigButton color="secondary" callback={onClick} position="relative" text="Agregar Todo" icon={<PlaylistAddIcon sx={{fontSize: '1.8rem'}}/>}/>
            <List
                aria-labelledby="basic-list-demo"
                sx={{ marginBottom: "7.5rem"}}
            >
                {
                    foodLists.map((itemData) => (
                        <Box key={itemData.nombre}>
                            <ListItem endAction={
                                <IconButton onClick={() => onClickUnit(itemData)} sx={{mx: 2, color:"#DD2B22"}} aria-label="AddCircleRoundedIcon" variant="plain" size="lg" color="danger">
                                    <AddCircleRoundedIcon sx={{ fontSize: "50px" }}/>
                                </IconButton>
                            }>
                                <ListItemDecorator sx={{ alignSelf: 'center', marginRight: "0.5rem" }}>
                                    <Box component="img" src={itemData.imagen} sx={{ width: "90px", maxHeight: "100%" }}></Box>
                                </ListItemDecorator>
                                <Stack spacing={0.6}>
                                    <Box style={{ fontWeight: "500"}}>{itemData.nombre}</Box>
                                    <Box style={{ fontSize: "13px"}}>{itemData.cantidad}</Box>
                                    <Box style={{ fontWeight: "700", fontSize: "15px" }}>${itemData.precio}</Box>
                                </Stack>
                            </ListItem>
                            {itemData == foodLists[foodLists.length - 1] ? <></> : <ListDivider inset="gutter" />}
                        </Box>
                    ))
                }
            </List>
            <BigButton color="main" callback={onClick2} position="fixed" text="Ver mi Lista"/>
        </div>
    );
}

export default IngredientList