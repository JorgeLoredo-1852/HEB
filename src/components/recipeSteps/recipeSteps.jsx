import { Box, IconButton } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import React from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import styles from "./recipeSteps.module.css";

function RecipeSteps(props) {
    const pasosList = props.pasosList;
    let nPaso = 0

    return (
        <div>
            <List
                aria-labelledby="basic-list-demo"
                sx={{ margin: "1rem 0.8rem", marginBottom: "7.5rem" }}
            >
                {
                    pasosList.map((pasosData) => {

                        nPaso = nPaso + 1

                        return <Box sx={{ marginBottom: "10px" }} key={`pasosData${nPaso}`}>
                            <ListItem
                                endAction={<ListItemDecorator sx={{paddingBottom: "90%", paddingLeft: "40%"}} style={{color: "red"}}>
                                    <Box component="img" src="https://cdn-icons-png.flaticon.com/512/6626/6626964.png" sx={{ width: "20px", height: "20px"}}></Box>
                                </ListItemDecorator>}
                                sx={{ display: "flex", alignItems: "center", borderRadius: "15px", border: "1px solid #80808067", py: "5%" }}>
                                <ListItemDecorator>
                                    <div className={Math.floor(nPaso / 10) > 0 ? styles.bigNumber : styles.number}>{nPaso}</div>
                                </ListItemDecorator>
                                <Box style={{ fontWeight: "500", paddingLeft: "0.8rem", marginRight: "10px" }}>{pasosData}</Box>
                            </ListItem>
                            {/*{nPaso == pasosList.length ? <></> : <ListDivider inset="gutter" />}*/}
                        </Box>
                    })
                }
            </List>
        </div>
    );
}

export default RecipeSteps