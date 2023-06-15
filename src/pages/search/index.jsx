import SearchContext from "@/hooks/SearchContext"
import SearchBox from "@/molecules/searchBox/searchBox"
import SearchCategories from "@/components/searchCategories/search-categories"
import { Grid, Typography, Box, IconButton, Toolbar } from "@mui/material"
import { useContext } from "react"
import { useState } from "react"
import DownloadIcon from '@mui/icons-material/Download';
import DownloadButton from "@/atoms/downloadButton/downloadButton"
import CategoryDisplay from "@/components/categoryDisplay/categoryDisplay"
import IngredientSearch from "@/components/IngredientSearch/IngredientSearch"
import { collection } from "firebase/firestore/lite"
import { db } from "@/api/firebase"
import { arr } from '@/components/categories/arr';
import { ArrowBack } from "@mui/icons-material"

const Search = () => {
    const { searchInfo, setSearchInfo } = useContext(SearchContext);
    const categories = arr.map(dato => dato.name.toLowerCase());

    

    return (
    <>
    {
        searchInfo !== "" ? 
    <div style={{position:"fixed", zIndex:10000}}>
    <Toolbar sx={{position:"relative"}}>

        <IconButton sx={{position:"absolute", color:"white", top:"-2.5rem", left:"1rem"}} color="inherit" aria-label="back" onClick={() => {setSearchInfo("")}} >
            <ArrowBack />
        </IconButton>
        </Toolbar>
    </div> : <></>
    }
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        <SearchBox/>
        {searchInfo && categories.indexOf(searchInfo.toLowerCase()) >= 0 && (<CategoryDisplay cat={searchInfo.toLowerCase()}/>)} 
        {searchInfo && categories.indexOf(searchInfo.toLowerCase()) < 0 && (<IngredientSearch cat={searchInfo.toLowerCase()}/>)}
        {!searchInfo && (<div>
                <Grid container>
                    <Grid xs = {12} sx= {{marginBottom: "15px", marginTop: "5px"}}>
                        <Typography variant="h6" fontWeight="bolder" >Categorias principales</Typography>
                    </Grid>
                </Grid>
                <SearchCategories/>
            </div>)}
    </div>
    </>)
}

export default Search