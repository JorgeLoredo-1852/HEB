import React, {useEffect, useState} from "react"
import ARExperience from "./Experience"
import ReactLogo from '../assets/icons/balloon.svg';
import Image from 'next/image';
import { Grid, Typography, Box } from "@mui/material";
import DownloadButton from "@/atoms/downloadButton/downloadButton";
import DownloadIcon from '@mui/icons-material/Download';

const requestOptionsGET = {
    method: 'POST',
    headers: { 
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
    },
    body: {
        token: ""
    }
  };

function ARComponents(){
    const [ARExp, setARExp] = useState(null) 
    const [ended, setEnded] = useState(false)
    const [userToken, setUserToken] = useState("")
    const [oneUser, setOneUser] = useState(0)
    const [tab, setTab] = useState(0)

    useEffect(() => {

        const a = async () => {
            if(oneUser === 0){
                await fetch('https://josecarl0s1.pythonanywhere.com/usuarios')
                .then((response) => response.json())  
                .then((dog) => {
                    if(dog){
                        let found = false
                        var x = localStorage.getItem("token");
                        for(let i = 0; i < dog.length; i++){
                            if (dog[i].Token === x){
                                found = true
                                setUserToken(x)
                            }
                        }
                        if(!found){
                            let newToken = token()
                            localStorage.setItem('token', newToken);
                            setUserToken(newToken)
                            fetch('https://josecarl0s1.pythonanywhere.com/usuario', {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    "token": newToken,
                                    "fecha": ""
                                })
                            })
                            setOneUser(1)
                        }
                    }
                });
            }
        }
        
        a()
    }, [])

    useEffect(() => {
        if(!ended){
            const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
                fetch('https://josecarl0s1.pythonanywhere.com/usuarios')
                .then((response) => response.json())  
                .then((dog) => {
                    if(dog){
                        var x = localStorage.getItem("token");
                        for(let i = 0; i < dog.length; i++){
                            if (dog[i].Token === x){
                                if(dog[i].Fecha){
                                    setEnded(true)
                                    if(document.getElementById("ARButton")){
                                        document.getElementById("ARButton").remove();
                                    }
                                    console.log("asdas")
                                }
                            }
                        }
                    }
                });
            }, 500)
            
            return () => clearInterval(intervalId); //This is important
        }
      }, [])

    const rand = () => {
        return Math.random().toString(36).substr(2);
    };
    
    const token = () => {
        return rand() + rand();
    };

    useEffect(() => {
        setARExp(new ARExperience())
    }, [])

    useEffect(() => {
        if(ARExp){
            ARExp.initScene()
            ARExp.setupXR()
        }
    }, [ARExp])
      
    

    return (
            <div
                className="container3D"
                style={{
                    zIndex: 100,
                    width: "100vw",
                    height: "100vh",
                    position:"relative",
                    backgroundColor: "black"
                }}
            >
                <div style={{width:"100vw", height:"100vh", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center", padding:"5rem 2rem"}}>
                    <div style={{height:"50%", marginTop:"-14rem"}}>
                        {ended ? <>
                        
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
                        
                        </> : 
                            <>
                            
                            
                            <div style={{fontSize:"2rem", textAlign:"center", fontWeight:"900"}}>¡Gana descuentos en tus compras!</div>
                            <div style={{display:"flex", justifyContent:"center", margin: "1.5rem 0"}}>
                                <Image
                                    width={350}
                                    height={270}
                                    src = "/images/balloons.png"
                                />
                            </div>
                            <div style={{textAlign:"center", padding:"1rem"}}>Rompe 15 Globos y gánate hasta 15% de descuento en tu proximo super</div>
                            <div style={{marginTop:"3rem", textAlign:"center", color:"grey"}}>Aún no juegas tu partida del dia</div>

                        </>}
                    </div>
                </div>
            </div>
      
)}

export default ARComponents;