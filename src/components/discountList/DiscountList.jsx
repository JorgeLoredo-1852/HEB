import BigButton from "@/atoms/buttonBig/buttonBig";
import { List } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const DiscountList = ({info}) => {
    const onClick = () => {
        router.push("/discount");
      };
    return (
        <div style={{position:"relative", width:"100vw"}}>
            <div style={{paddingTop:"5rem", fontWeight:"900", fontSize:"1.8rem", paddingLeft:"1.5rem", paddingBottom:"0.8rem"}}>Mis Descuentos</div>
            {
                info.map((dis) => (
                    <DiscountCard details = {dis}/>
                ))
            }
      </div>
    )
}

const DiscountCard = ({details}) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/list");
        localStorage.setItem("discount", details.discount)
        localStorage.setItem("expires", details.expires)

    }
    return (
    <>
        <div style={{backgroundColor:"#DD2B22", display:"flex", justifyContent:"space-evenly", padding:"1.3rem 1rem", position:"relative", margin:"0.5rem 2rem", borderRadius:"5px"}}>
            <div style={{position:"absolute", width:"3.5rem", height:"3.5rem", backgroundColor:"white", borderRadius:"100px", left:0, top:"50%", transform:"Translate(-50%, -50%)"}}></div>
            <div style={{position:"absolute", width:"3.5rem", height:"3.5rem", backgroundColor:"white", borderRadius:"100px", right:0, top:"50%", transform:"Translate(50%, -50%)"}}></div>
            <div style={{marginRight:"1rem"}}>
                <div style={{color:"white", fontSize:"3.4rem", lineHeight:"1", fontWeight:"900"}}>{details.discount}</div>
                <div style={{color:"white", fontSize:"0.6rem", fontWeight:"900"}}>DE DESCUENTO</div>
            </div>
            <div style={{}}>
                <div style={{fontSize:"0.9rem", color:"white"}}><span style={{fontWeight:"800"}}>Expira: </span>{details.expires}</div>
                <div onClick={onClick} style={{cursor:"pointer", marginTop:"0.5rem", color:"#DD2B22", backgroundColor:"white", fontSize:"0.9rem", padding:"0.3rem 1.5rem", width:"fit-content", borderRadius:"100px"}}>
                    Usar
                </div>
            </div>
        </div>
    </>)
}

export default DiscountList;