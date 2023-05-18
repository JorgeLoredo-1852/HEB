import React, {useEffect, useState} from "react"
import ARExperience from "./Experience"
import ReactLogo from '../assets/icons/balloon.svg';
import Image from 'next/image';


function ARComponents(){
    const [ARExp, setARExp] = useState(null) 
    const [ended, setEnded] = useState(false)
    

    useEffect(() => {
        setARExp(new ARExperience())
    }, [])

    useEffect(() => {
        if(ARExp){
            ARExp.initScene()
            ARExp.setupXR()
        }
    }, [ARExp])

    if (typeof window !== 'undefined') {
        let value = window.endedARExperience
        console.log(value)
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
                        {ended ? <>
                        
                        
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