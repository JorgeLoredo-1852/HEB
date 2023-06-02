import { Box, ListItem, List, Stack } from '@mui/material'
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import { db } from '@/api/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useRouter } from "next/router";


const CategoryDisplay = ({cat}) => {

  const router = useRouter();

  const [recetas, setRecetas] = useState([]);
  const collectionReference = collection(db, "Recetas");

  //console.log(cat);

  const GetFilter = async() => {
    const q = query(collectionReference, where("categorias", "array-contains", cat));
    const data = await(getDocs(q))
    setRecetas(data.docs.map((doc) => ({...doc.data()})));
  }

  useEffect(() => {
    if(recetas.length == 0) GetFilter();
  }, [recetas])

  const handleClick = (link) => {
    //console.log(link)
    router.push(link);
  };
  
  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Box style={{borderRadius: '12px', marginLeft: '12px', marginRight: '12px',  width: '100%', height: '12rem', overflow: 'hidden', display: 'flex', alignItems: 'center', position: 'relative'}}>
          <Box component='img' src={recetas.length>0?recetas[Math.floor(Math.random() * recetas.length)].imagen:'images/burger.jpg'} style = {{ width: 'inherit'}}/>
          <Box style={{ color: '#FFFFFF', position: 'absolute', bottom: '0', left: '0', marginLeft: '20px', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  fontSize: '20px', textTransform: 'capitalize'}}>{cat}</Box>
        </Box>
      </div>
      <List aria-labelledby="basic-list-demo" sx={{ marginBottom: "7.5rem" }}>
        {recetas.map((itemData) => (
            <div key={`recetacategoria${itemData.id}`}>
             <ListItem>
              {/*console.log(itemData.id)*/}
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
             <ListDivider inset="gutter" />
            </div>
            
          )
        )}
      </List>
    </>
  )
}

export default CategoryDisplay