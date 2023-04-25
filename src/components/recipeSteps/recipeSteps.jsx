import {Box } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import React from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import styles from "./recipeSteps.module.css";

function RecipeSteps(props) {
    const pasosList = props.pasosList;
    let nPaso = 0

    return (
        <div>
            <List
                aria-labelledby="basic-list-demo"
                sx = {{margin: "1rem 0.8rem", marginBottom:"7.5rem"}}
            >
                {
                    pasosList.map((pasosData) => {

                        nPaso = nPaso + 1

                        return <Box key={`pasosData${nPaso}`}>
                                    <ListItem sx={{ display: "flex", alignItems: "center"}}>
                                        <ListItemDecorator>
                                            <div className={Math.floor(nPaso / 10) > 0 ? styles.bigNumber : styles.number}>{nPaso}</div>
                                        </ListItemDecorator>
                                        <Box style={{ fontWeight: "500", paddingLeft: "0.8rem"}}>{pasosData.text}</Box>
                                    </ListItem>
                                    {nPaso == pasosList.length ? <></> : <ListDivider inset="gutter" />}
                        </Box>
})
                }
            </List>
        </div>
    );
}

export default RecipeSteps