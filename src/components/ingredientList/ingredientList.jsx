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

function IngredientList(props) {
    const foodLists = props.foodLists;
    const { listInfo, setListInfo } = useContext(ListContext)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({...listInfo})
    }, [])


    const onClick = () => {
        foodLists.map((ingredient) => {
            if (data.hasOwnProperty(`${ingredient.nombre}`)) {
                data[`${ingredient.nombre}`] = data[`${ingredient.nombre}`] + 1
            } else {
                data[`${ingredient.nombre}`] = 1
            }
        })
        setListInfo({...listInfo, ...data})
    }
    console.log(listInfo)

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
                                <IconButton sx={{mx: 2, color:"#DD2B22"}} aria-label="AddCircleRoundedIcon" variant="plain" size="lg" color="danger">
                                    <AddCircleRoundedIcon sx={{ fontSize: "50px" }}/>
                                </IconButton>
                            }>
                                <ListItemDecorator sx={{ alignSelf: 'center', marginRight: "0.5rem" }}>
                                    <Box component="img" src={itemData.imagen} sx={{ width: "90px", maxHeight: "100%" }}></Box>
                                </ListItemDecorator>
                                <Stack spacing={0.6}>
                                    <Box style={{ fontWeight: "500"}}>{itemData.nombre}</Box>
                                    <Box style={{ fontSize: "13px"}}>{itemData.cantidad}</Box>
                                    <Box style={{ fontWeight: "700", fontSize: "15px" }}>{itemData.precio}</Box>
                                </Stack>
                            </ListItem>
                            {itemData == foodLists[foodLists.length - 1] ? <></> : <ListDivider inset="gutter" />}
                        </Box>
                    ))
                }
            </List>
        </div>
    );
}

export default IngredientList