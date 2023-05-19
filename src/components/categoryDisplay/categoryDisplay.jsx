import { Box, ListItem, List, Stack } from '@mui/material'
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import { db } from '@/api/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore/lite';
import { useEffect } from 'react';

const placeholderRecetas = [
    {
        title: 'French Toast',
        time: '60 mins',
        difficulty: 'FÁCIL',
        image: 'https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/quick_and_easy_french_toast_new_800x800.webp?rev=472bd38acf3f4e80b329915ba486cae1&vd=20220809T202043Z&hash=34381AE86E477B12B64277F710290F21',
    },
    {
        title: 'Huevo Revuelto',
        time: '45 mins',
        difficulty: 'MEDIO',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-500x375.jpg',
    },
    {
        title: 'Ramen',
        time: '120 mins',
        difficulty: 'DIFICÍL',
        image: 'https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg', 
    }
]

const CategoryDisplay = ({cat}) => {

  const [recetas, setRecetas] = useState([]);
  const collectionReference = collection(db, "Recetas");

  const GetFilter = async() => {
    const q = query(collectionReference, where("categorias", "array-contains", cat));
    const data = await(getDocs(q))
    setRecetas(data.docs.map((doc) => ({...doc.data()})));
  }

  useEffect(() => {
    if(recetas.length == 0) GetFilter();
  }, [recetas])
  
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
            <>
             <ListItem>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width:"100%", marginBottom:"5px", marginTop:"5px"}}>
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
            </>
            
          )
        )}
      </List>
    </>
  )
}

export default CategoryDisplay