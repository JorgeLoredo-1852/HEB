import React from 'react'
import { Box, ListItem, List, Stack } from '@mui/material'
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import { db } from '@/api/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useRouter } from "next/router";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const IngredientSearch = ({cat}) => {
  const router = useRouter();
  const [recetas, setRecetas] = useState([]);
  const collectionReference = collection(db, "Recetas");
  
  console.log(cat);
  
  const GetCollection = async() => {
      const data = await(getDocs(collectionReference))
      setRecetas(data.docs.map((doc) => ({...doc.data()})));
  }

  useEffect(() => {
      if(recetas.length == 0) GetCollection();
  }, [recetas])
    
  const handleClick = (link) => {
      console.log(link)
      router.push(link);
  };
    
  return (
    <div style={{marginBottom:"7.5rem"}}>
        <List aria-labelledby="basic-list-demo">
        <div style={{fontSize:"1.2rem", fontWeight:"800"}}>Recetas</div>
        {recetas.filter(dato => dato.nombre.toLowerCase().includes(cat)).map((itemData) => (
            <div key={`recetacategoria${itemData.id}`}>
             <ListItem>
              {console.log(itemData.id)}
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width:"100%", marginBottom:"5px", marginTop:"5px"}} onClick={() => handleClick(`/receta/${itemData.id}`)}>
                 <ListItemDecorator sx={{ alignSelf: "center", marginRight: "0.5rem" }}>
                   <Box  component="img" sx={{ width: "70px", height: "70px",maxHeight: "70px", borderRadius: '12px', backgroundImage: `url(${itemData.imagen})`, backgroundSize: "cover"}} />
                 </ListItemDecorator>
                 <Box>
                    <Stack spacing={0.6}>
                        <Box style={{ fontWeight: '900' }}>
                            {itemData.nombre}
                        </Box>
                        <Box style = {{display: 'flex', justifyContent: 'left'}}>
                            <AccessTimeIcon sx={{mr:"5px"}} />
                            {itemData.tiempo} Min
                        </Box>
                    </Stack>
                 </Box>
                 <Box sx={{ marginLeft: 'auto'}}>
                    <div style={{padding:"0.2rem 0.8rem", backgroundColor: itemData.dificultad === 'Fácil' ? '#C7EFC1' : itemData.dificultad === 'Media' ? '#F8D5AC' : itemData.dificultad === 'Difícil' ? '#F1B2B2' : '#C7EFC1', fontSize:"0.8rem", borderRadius:"100px"}}>
                        {itemData.dificultad}
                    </div>
                 </Box>
               </Box>  
             </ListItem>
             {
              recetas[recetas.length - 1].nombre === itemData.nombre ? <></> : <ListDivider inset="gutter" />
             }
            </div>
            
          )
        )}
      </List>
      <div style={{fontSize:"1.2rem", fontWeight:"800", marginTop:"1rem"}}>Ingredientes</div>





      <Accordion sx={{marginTop:"1rem", border:"none", boxShadow:"0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display:"flex", alignItems:"center"}}>
            <Box  component="img" sx={{ width: "70px", height: "70px",maxHeight: "70px", borderRadius: '12px', backgroundImage: `url(/images/burger.jpg)`, backgroundSize: "cover"}} />
            <div style={{fontWeight:"800", marginLeft:"1rem"}}>Queso 1</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>





        {recetas.filter(dato => dato.nombre.toLowerCase().includes(cat)).map((itemData) => (
            <div key={`recetacategoria${itemData.id}`}>
             <ListItem>
              {console.log(itemData.id)}
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width:"100%", marginBottom:"5px", marginTop:"5px"}} onClick={() => handleClick(`/receta/${itemData.id}`)}>
                 <ListItemDecorator sx={{ alignSelf: "center", marginRight: "0.5rem" }}>
                   <Box  component="img" sx={{ width: "70px", height: "70px",maxHeight: "70px", borderRadius: '12px', backgroundImage: `url(${itemData.imagen})`, backgroundSize: "cover"}} />
                 </ListItemDecorator>
                 <Box>
                    <Stack spacing={0.6}>
                        <Box style={{ fontWeight: '900' }}>
                            {itemData.nombre}
                        </Box>
                        <Box style = {{display: 'flex', justifyContent: 'left'}}>
                            <AccessTimeIcon sx={{mr:"5px"}} />
                            {itemData.tiempo} Min
                        </Box>
                    </Stack>
                 </Box>
                 <Box sx={{ marginLeft: 'auto'}}>
                    <div style={{padding:"0.2rem 0.8rem", backgroundColor: itemData.dificultad === 'Fácil' ? '#C7EFC1' : itemData.dificultad === 'Media' ? '#F8D5AC' : itemData.dificultad === 'Difícil' ? '#F1B2B2' : '#C7EFC1', fontSize:"0.8rem", borderRadius:"100px"}}>
                        {itemData.dificultad}
                    </div>
                 </Box>
               </Box>  
             </ListItem>
             {
              recetas[recetas.length - 1].nombre === itemData.nombre ? <></> : <ListDivider inset="gutter" />
             }
            </div>
            
          )
        )}





        </AccordionDetails>
      </Accordion>




      


      <Accordion sx={{marginTop:"1rem", border:"none", boxShadow:"0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display:"flex", alignItems:"center"}}>
            <Box  component="img" sx={{ width: "70px", height: "70px",maxHeight: "70px", borderRadius: '12px', backgroundImage: `url(/images/burger.jpg)`, backgroundSize: "cover"}} />
            <div style={{fontWeight:"800", marginLeft:"1rem"}}>Queso 1</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>





        {recetas.filter(dato => dato.nombre.toLowerCase().includes(cat)).map((itemData) => (
            <div key={`recetacategoria${itemData.id}`}>
             <ListItem>
              {console.log(itemData.id)}
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width:"100%", marginBottom:"5px", marginTop:"5px"}} onClick={() => handleClick(`/receta/${itemData.id}`)}>
                 <ListItemDecorator sx={{ alignSelf: "center", marginRight: "0.5rem" }}>
                   <Box  component="img" sx={{ width: "70px", height: "70px",maxHeight: "70px", borderRadius: '12px', backgroundImage: `url(${itemData.imagen})`, backgroundSize: "cover"}} />
                 </ListItemDecorator>
                 <Box>
                    <Stack spacing={0.6}>
                        <Box style={{ fontWeight: '900' }}>
                            {itemData.nombre}
                        </Box>
                        <Box style = {{display: 'flex', justifyContent: 'left'}}>
                            <AccessTimeIcon sx={{mr:"5px"}} />
                            {itemData.tiempo} Min
                        </Box>
                    </Stack>
                 </Box>
                 <Box sx={{ marginLeft: 'auto'}}>
                    <div style={{padding:"0.2rem 0.8rem", backgroundColor: itemData.dificultad === 'Fácil' ? '#C7EFC1' : itemData.dificultad === 'Media' ? '#F8D5AC' : itemData.dificultad === 'Difícil' ? '#F1B2B2' : '#C7EFC1', fontSize:"0.8rem", borderRadius:"100px"}}>
                        {itemData.dificultad}
                    </div>
                 </Box>
               </Box>  
             </ListItem>
             {
              recetas[recetas.length - 1].nombre === itemData.nombre ? <></> : <ListDivider inset="gutter" />
             }
            </div>
            
          )
        )}





        </AccordionDetails>
      </Accordion>






    </div>
  )
}

export default IngredientSearch