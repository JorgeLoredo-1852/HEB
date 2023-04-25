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

function IngredientList(props) {
    const foodLists = props.foodLists;

    const onClick = () => {

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
                        <Box>
                            <ListItem endAction={
                                <IconButton sx={{mx: 2, color:"#DD2B22"}} aria-label="AddCircleRoundedIcon" variant="plain" size="lg" color="danger">
                                    <AddCircleRoundedIcon sx={{ fontSize: "50px" }}/>
                                </IconButton>
                            }>
                                <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                    <Box component="img" src={itemData.img} sx={{ maxWidth: "100%", height: "80px" }}></Box>
                                </ListItemDecorator>
                                <Stack spacing={0.6}>
                                    <Box style={{ fontWeight: "500"}}>{itemData.item}</Box>
                                    <Box style={{ fontSize: "13px"}}>{itemData.qty}</Box>
                                    <Box style={{ fontWeight: "700", fontSize: "15px" }}>{itemData.price}</Box>
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