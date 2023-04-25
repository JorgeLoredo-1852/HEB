import SearchBox from "@/molecules/searchBox/searchBox"
import { Grid } from "@mui/material"


const Search = () => {
    return (
    <div style={{padding:"1.5rem", marginTop:"3rem"}}>
        <SearchBox/>
        <Grid container>
            <Grid xs = {6}>
                <div>aaa</div>
            </Grid>
            <Grid xs = {6}>aaa</Grid>
        </Grid>
    </div>)
}

export default Search