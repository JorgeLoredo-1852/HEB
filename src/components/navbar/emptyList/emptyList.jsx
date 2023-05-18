import React from 'react'
import { List } from '@mui/material'
import BigButton from '@/atoms/buttonBig/buttonBig'
import { useRouter } from 'next/router';

const emptyList = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };


  return (
    <List>
      <div style = {{textAlign: "center", paddingTop: "5rem"}} >
      <img style = {{width: "80%"}} src="https://img.icons8.com/?size=512&id=111399&format=png" alt="emptyList" />
    </div>
    <div style = {{textAlign: "center", marginLeft: "10%", marginRight: "10%"}}>
      ¡Ups! Tu lista está vacía. Aquí aparecerán los productos que agregues.
    </div>
    <div style={{marginTop: "20px"}}>
    <BigButton
      color="main"
      callback={onClick}
      text="Explorar Recetas"
      sx={{ marginBottom: "10px" }}
    ></BigButton>
    </div>
    </List>
    
  )
}

export default emptyList