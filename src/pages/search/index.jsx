import SearchContext from "@/hooks/SearchContext"
import SearchBox from "@/molecules/searchBox/searchBox"
import SearchCategories from "@/components/searchCategories/search-categories"
import { Grid, Typography, Box } from "@mui/material"
import { useContext } from "react"
import { useState } from "react"
import DownloadIcon from '@mui/icons-material/Download';
import DownloadButton from "@/atoms/downloadButton/downloadButton"


const Search = () => {
    const { searchInfo } = useContext(SearchContext)

    return (
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        {/* <SearchBox/>
        {searchInfo ? 
            <div>
                {searchInfo}
            </div> : 
            <div>
                <Grid container>
                    <Grid xs = {12} sx= {{marginBottom: "15px", marginTop: "5px"}}>
                        <Typography variant="h6" fontWeight="bolder" >Categorias principales</Typography>
                    </Grid>
                </Grid>
                <SearchCategories/>
            </div>} */}
        <Grid container style={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Grid xs = {12} sx= {{ marginTop: "70px", marginLeft:"20px", marginRight:"20px" }} >
                <Typography variant="h5" fontWeight="bolder" style={{textAlign:"center"}}>¡Felicidades ganaste un 10% descuento!</Typography>
            </Grid>
            <Box component="img" sx={{height: 300, width: 300, display:"flex"}} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"/>
            <Grid xs = {12} sx= {{marginBottom: "30px", marginTop: "10px"}} >
                <Typography style={{textAlign:"center"}}>Presenta este Codigo QR en la caja al momento de hacer tu super</Typography>
            </Grid>
            <Grid xs = {12} sx= {{marginRight:"15px", marginLeft:"15px"}} >
                <DownloadButton color="secondary" position="relative" text="Descargar Codigo QR" icon={<DownloadIcon sx={{fontSize: '1.5rem', marginRight:"5px"}}/>}/>
            </Grid>
        </Grid>
    </div>)
}

export default Search