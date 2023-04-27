import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import style from "./search-categories.module.css"

const arr = [
    "Desayunos",
    "Comidas",
    "Cenas",
    "Aperitivos",
    "Antojitos",
    "Bebidas",
    "Rápida",
    "Postres",
    "Desayunos",
    "Comidas",
    "Cenas",
    "Aperitivos",
    "Antojitos",
    "Bebidas",
    "Rápida",
    "Postres",
  ];


export default function SearchCategories() {
  return (
    <Box sx={{ width: '100%', marginLeft: "28px"}}>
      <Grid container columnSpacing={{ xs: 4, sm: 4, md: 0 }} >
       {arr.map((num) => ( 
       <Grid CardMedia xs={5} sx={{ mx: "10px"}}>
                <CardMedia
                component="img"
                height="120"
                image="/images/food.png"
                sx={{ borderRadius: "14px", padding: "0px"}}
                />
                <CardContent sx={{ paddingTop: "5px", paddingBottom: "0px",  width: "100%", textAlign: "center"}}>
                    <Typography variant="p" fontSize={"14px"}>
                        {num}
                    </Typography>
                </CardContent>
        </Grid> ))}
       
      </Grid>
    </Box>
  );
}