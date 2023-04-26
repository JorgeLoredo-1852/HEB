import SearchContext from "@/hooks/SearchContext"
import SearchBox from "@/molecules/searchBox/searchBox"
import { Grid } from "@mui/material"
import { useContext } from "react"
import { useState } from "react"


const Search = () => {
    const { searchInfo } = useContext(SearchContext)

    return (
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        <SearchBox/>
        <Grid container>
            <Grid xs = {12}>
                <div>{searchInfo}</div>
            </Grid>
        </Grid>
    </div>)
}

export default Search