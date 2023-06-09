import React, {useEffect, useState} from "react"
import ARExperience from "./Experience"
import ReactLogo from '../assets/icons/balloon.svg';
import Image from 'next/image';
import { Grid, Typography, Box } from "@mui/material";
import DownloadButton from "@/atoms/downloadButton/downloadButton";
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from "next/router";
import { useContext } from "react";
import DiscountContext from "@/hooks/DiscountContext";
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
    const [ended, setEnded] = useState(0)
    const [userToken, setUserToken] = useState("")
    const [oneUser, setOneUser] = useState(0)
    const [tab, setTab] = useState(0)

    const [discount, setDiscount] = useState(null)
    const [expires, setExpires] = useState(null)
    const router = useRouter()

    const { discountInfo, setDiscountInfo } = useContext(DiscountContext);




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
        
        setDiscount(localStorage.getItem("discount"))
        setExpires(localStorage.getItem("expires"))

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
                                


                                // CHECK IF USER HAS PLAYED IN THE LAST WEEK
                                


                                if(dog[i].Fecha){
                                    setEnded(1)
                                    if(document.getElementById("ARButton")){
                                        document.getElementById("ARButton").remove();
                                    }
                                    //console.log("asdas")
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

    const addToDiscountList = () => {
        let a = []
        for(let i = 0; i < discountInfo.length; i++){
            a.push(discountInfo[i])
        }

        const today = new Date();
        today.setDate(today.getDate() + 7);
        const d = "dd/mm/yyyy"
        const b = d.replace('mm', today.getMonth() + 1)
    .replace('yyyy', today.getFullYear())
	.replace('dd', today.getDate());

        a.push({
            discount: "15%",
            expires: b
        },)
    
        setDiscountInfo(a)
    }
    
    useEffect(() => {
        if(ended == 1){
            let a = []
            const today = new Date();
            today.setDate(today.getDate() + 7);
            const d = "dd/mm/yyyy"
            const b = d.replace('mm', today.getMonth() + 1)
                .replace('yyyy', today.getFullYear())
                .replace('dd', today.getDate());
            

            for(let i = 0; i < discountInfo.length; i++){
                if(discountInfo[i].discount != "15%" && discountInfo[i].expires != b){
                    a.push(discountInfo[i])
                }
            
        }
        a.push({
            discount: "15%",
            expires: b
        })
    
        setDiscountInfo(a)
        }
    },[ended])
      
    const onClick = () => {
        localStorage.setItem('currDiscount', localStorage.getItem("discount"))
        router.push("/list")
    }

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
                        {ended === 0 && (
                        
                        <>
                                                        
                                                        
                            <div style={{fontSize:"2rem", textAlign:"center", fontWeight:"900"}}>¡Gana descuentos en tus compras!</div>
                            <div style={{display:"flex", justifyContent:"center", margin: "1.5rem 0"}}>
                                <Image
                                    width={350}
                                    height={270}
                                    src = "/images/balloons.png"
                                />
                            </div>
                            <div style={{textAlign:"center", padding:"1rem"}}>Rompe 15 Globos y gánate hasta 15% de descuento en tu próximo súper</div>
                            <div style={{marginTop:"3rem", textAlign:"center", color:"grey"}}>Aún no juegas tu partida del dia</div>

                            </>

                        )}
                        {ended === 1 && (
                        <>
                                                        
                                                        
                        <div style={{fontSize:"2rem", textAlign:"center", fontWeight:"900"}}>¡Gana descuentos en tus compras!</div>
                        <div style={{display:"flex", justifyContent:"center", margin: "1.5rem 0"}}>
                            <Image
                                width={350}
                                height={270}
                                src = "/images/balloons.png"
                            />
                        </div>
                        <div style={{textAlign:"center", padding:"1rem"}}>Rompe 10 Globos y gánate hasta 30% de descuento en tu próximo súper</div>
                        <div style={{marginTop:"3rem", textAlign:"center", color:"grey"}}>Espera a la siguiente semana para desbloquear más descuentos </div>

                            {

                                () => addToDiscountList()

                            }

                        </>
                        
                        )}
                    </div>
                </div>
            </div>
      
)}

export default ARComponents;