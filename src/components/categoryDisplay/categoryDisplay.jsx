import { Box, ListItem, List, Stack } from '@mui/material'
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
        image: 'https://www.foodandwine.com/thmb/0AXGLeY6dYnY8sEXFqxBa8opDrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg', 
    }
]

const CategoryDisplay = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Box style={{borderRadius: '12px', marginLeft: '12px', marginRight: '12px',  width: '100%', height: '12rem', overflow: 'hidden', display: 'flex', alignItems: 'center', position: 'relative'}}>
          <Box component='img' src={'images/burger.jpg'} style = {{ width: 'inherit'}}/>
          <Box style={{ color: '#FFFFFF', position: 'absolute', bottom: '0', left: '0', marginLeft: '20px', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: '900', fontSize: '24px'}}>Desayunos</Box>
        </Box>
      </div>
      <List aria-labelledby="basic-list-demo" sx={{ marginBottom: "7.5rem" }}>
        {placeholderRecetas.map((itemData) => (
            <>
             <ListItem>
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                 <ListItemDecorator sx={{ alignSelf: "center", marginRight: "0.5rem" }}>
                   <Box  component="img" src={itemData.image} sx={{ width: "90px", maxHeight: "90px", borderRadius: '12px'}} />
                 </ListItemDecorator>
                 <Box>
                    <Stack spacing={0.6}>
                        <Box style={{ fontWeight: '900' }}>
                            {itemData.title}
                        </Box>
                        <Box style = {{display: 'flex', justifyContent: 'center'}}>
                            <AccessTimeIcon/>
                            {itemData.time}
                        </Box>
                    </Stack>
                 </Box>
                 <Box sx={{ marginLeft: 'auto'}}>
                    <div style={{padding:"0.2rem 0.8rem", backgroundColor: itemData.difficulty === 'FÁCIL' ? '#C7EFC1' : itemData.difficulty === 'MEDIO' ? '#F2B46B' : itemData.difficulty === 'DIFICÍL' ? '#F1B2B2' : '#C7EFC1', fontSize:"0.8rem", borderRadius:"100px"}}>
                        {itemData.difficulty}
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