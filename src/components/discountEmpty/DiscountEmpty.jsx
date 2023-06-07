import BigButton from "@/atoms/buttonBig/buttonBig";
import { List } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const DiscountEmpty = () => {
  const router = useRouter();
    const onClick = () => {
        router.push("/prizes");
      };
    return (
        <div style={{height:"100vh", position:"relative", width:"100vw"}}>
            <div style={{paddingTop:"5rem", fontWeight:"900", fontSize:"1.8rem", paddingLeft:"1.5rem"}}>Mis Descuentos</div>
            <div style={{position:"absolute", top:"50%", left:"50%", width:"100%", transform:"Translate(-50%, -60%)"}}>
        <div style = {{textAlign: "center", paddingTop: "5rem"}} >
        <Image width={274} height={244} src={'/images/emp.png'} alt="emptyList" />
      </div>
      <div style = {{textAlign: "center", marginLeft: "10%", marginRight: "10%"}}>
      ¡Ups! No tienes cupones en tu lista. Juega para desbloquear descuentos.
      </div>
      <div style={{marginTop: "20px"}}>
      <BigButton
        color="main"
        callback={onClick}
        text="Desbloquear Descuentos"
        sx={{ marginBottom: "10px" }}
      ></BigButton>
      </div></div>
      </div>
    )
}

export default DiscountEmpty;