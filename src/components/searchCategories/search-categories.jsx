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

import { arr } from '../categories/arr';
import { useContext } from 'react';
import SearchContext from '@/hooks/SearchContext';

export default function SearchCategories() {


  const { searchInfo, setSearchInfo } = useContext(SearchContext);

  const selectCategory = (category) => {
    setSearchInfo(category);
  };


  return (
    <Box sx={{ width: '100%', marginLeft: "28px"}}>
      <Grid container columnSpacing={{ xs: 4, sm: 4, md: 0 }} >
       {arr.map((num) => ( 
       <Grid CardMedia xs={5} sx={{ mx: "10px"}} onClick={() => selectCategory(num.name)}>
                <CardMedia
                component="img"
                height="120"
                image={num.img}
                sx={{ borderRadius: "14px", padding: "0px"}}
                />
                <CardContent sx={{ paddingTop: "5px", paddingBottom: "0px",  width: "100%", textAlign: "center"}}>
                    <Typography variant="p" fontSize={"14px"}>
                        {num.name}
                    </Typography>
                </CardContent>
        </Grid> ))}
       
      </Grid>
    </Box>
  );
}