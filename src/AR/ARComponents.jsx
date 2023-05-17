import React, {useEffect, useState} from "react"
import ARExperience from "./Experience"
import ReactLogo from '../assets/icons/balloon.svg';
import Image from 'next/image';


const ARComponents = () => {
    const [ARExp, setARExp] = useState(null) 

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
                <div style={{width:"100vw", height:"100vh", backgroundColor:"#DD2B22", display:"flex", justifyContent:"center", alignItems:"center", padding:"5rem 2rem"}}>
                    <div style={{height:"50%", marginTop:"-14rem"}}>
                        <div style={{color:"white", fontSize:"2rem", fontWeight:"800", textAlign:"center", marginBottom:"1.5rem"}}>¡GANA DESCUENTOS EN TUS COMPRAS!</div>
                        <div style={{backgroundColor:"white", padding:"1.5rem 1.5rem", height:"100%", borderRadius:"0.6rem"}}>
                            <div style={{width:"100%", height:"50%", position:"relative"}}>
                                <Image
                                    priority
                                    src={'/icons/balloon.svg'}
                                    alt="Balloon"
                                    width={100}
                                    height={100}
                                    style={{position:"absolute", left:0, bottom:0}}
                                /> 
                                <Image
                                    priority
                                    src={'/icons/balloon.svg'}
                                    alt="Balloon"
                                    width={150}
                                    height={150}
                                    style={{position:"absolute", left:"50%", transform:"TranslateX(-50%)"}}
                                />
                                <Image
                                    priority
                                    src={'/icons/balloon.svg'}
                                    alt="Balloon"
                                    width={100}
                                    height={100}
                                    style={{position:"absolute", right:0, bottom:0}}
                                />
                            </div>
                            <div style={{marginTop:"1rem", width:"100%", textAlign:"center"}}>
                                Rompe 10 globos y gánate hasta 10 de descuento en tu carrito
                            </div>
                            <div style={{marginTop:"4rem", width:"100%", textAlign:"center", fontSize:"0.8rem", color:"grey"}}>
                                Aún no juegas tu partida de la semana
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
)}

export default ARComponents;