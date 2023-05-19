import SearchContext from "@/hooks/SearchContext"
import SearchBox from "@/molecules/searchBox/searchBox"
import SearchCategories from "@/components/searchCategories/search-categories"
import { Grid, Typography, Box } from "@mui/material"
import { useContext } from "react"
import { useState } from "react"
import DownloadIcon from '@mui/icons-material/Download';
import DownloadButton from "@/atoms/downloadButton/downloadButton"
import CategoryDisplay from "@/components/categoryDisplay/categoryDisplay"


const Search = () => {
    const { searchInfo } = useContext(SearchContext)

    return (
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        <SearchBox/>
        {searchInfo && searchInfo == "Desayunos" && (<CategoryDisplay cat="desayuno"/>)}
        {searchInfo && searchInfo == "Comida" && (<CategoryDisplay cat="comida"/>)}
        {searchInfo && searchInfo == "Cenas" && (<CategoryDisplay cat="cena"/>)}
        {searchInfo && searchInfo != "Desayunos" && (<>{searchInfo}</>)}
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