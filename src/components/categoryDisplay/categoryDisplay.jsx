import { Box } from '@mui/material'

const CategoryDisplay = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', justifyContent: 'center'}}>
      <Box style={{borderRadius: '12px', marginLeft: '12px', marginRight: '12px',  width: '100%', height: '12rem', overflow: 'hidden', display: 'flex', alignItems: 'center', position: 'relative'}}>
        <Box component='img' src={'images/burger.jpg'} style = {{ width: 'inherit'}}/>
        <Box style={{ color: '#FFFFFF', position: 'absolute', bottom: '0', left: '0', marginLeft: '20px', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: '900', fontSize: '24px'}}>Desayunos</Box>
      </Box>
    </div>
  )
}

export default CategoryDisplay