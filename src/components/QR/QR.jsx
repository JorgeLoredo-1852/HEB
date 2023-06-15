import React, {useEffect, useState} from "react"
import { Grid, Typography, Box } from "@mui/material";
import DownloadButton from "@/atoms/downloadButton/downloadButton";
import InfoIcon from '@mui/icons-material/Info';

const QR = ({discount, expires, callback = ()=>{}}) => {

    
    
    return (

        <>
                        
                        <Grid container style={{display:"flex", width:"100%", justifyContent:"center"}}>
                            <Grid xs = {12} sx= {{ marginTop: "70px", marginLeft:"20px", marginRight:"20px" }} >
                                <Typography variant="h5" fontWeight="bolder" style={{textAlign:"center"}}>¡Tienes un {discount} descuento!</Typography>
                            </Grid>
                            <Box component="img" sx={{height: 300, width: 300, display:"flex"}} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"/>
                            <Grid xs = {12} sx= {{marginBottom: "30px", marginTop: "10px"}} >
                                <Typography style={{textAlign:"center"}}>Presenta este Codigo QR en la caja al momento de hacer tu super</Typography>
                            </Grid>
                            <Grid xs = {12}>
                                <DownloadButton callback={callback} color="secondary" position="relative" text="Usar código" />
                            </Grid>
                        </Grid>

                        <div
                        style ={{display: "flex", justifyContent: "center", marginTop: "1rem"}}
                        
                        ><InfoIcon style={{marginRight: "1rem"}}/>
                            <p>Expira el {expires}</p>
                            
                            </div>
                                        
                                        </>

    )
}

export default QR;