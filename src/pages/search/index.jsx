import SearchContext from "@/hooks/SearchContext"
import SearchBox from "@/molecules/searchBox/searchBox"
import SearchCategories from "@/components/searchCategories/search-categories"
import { Grid, Typography, Box } from "@mui/material"
import { useContext } from "react"
import { useState } from "react"
import DownloadIcon from '@mui/icons-material/Download';
import DownloadButton from "@/atoms/downloadButton/downloadButton"
import CategoryDisplay from "@/components/categoryDisplay/categoryDisplay"
import { collection } from "firebase/firestore/lite"
import { db } from "@/api/firebase"

const Search = () => {
    const { searchInfo } = useContext(SearchContext);
    const categories = [
        "bebidas", 
        "postres",
        "desayunos",
        "comida",
        "italiana",
        "cenas",
        "japonesa"
    ];
    console.log(searchInfo.toLowerCase());

    return (
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        <SearchBox/>
        {searchInfo && categories.indexOf(searchInfo.toLowerCase()) >= 0 && (<CategoryDisplay cat={searchInfo.toLowerCase()}/>)} 
        {!searchInfo && (<div>
                <Grid container>
                    <Grid xs = {12} sx= {{marginBottom: "15px", marginTop: "5px"}}>
                        <Typography variant="h6" fontWeight="bolder" >Categorias principales</Typography>
                    </Grid>
                </Grid>
                <SearchCategories/>
            </div>)}
    </div>)
}

export default Search