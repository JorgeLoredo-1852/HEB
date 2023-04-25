import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { routeConfig } from './routeConfig';


const MyAppBar = () => {

  const [config, setConfig] = useState({})
  const router = useRouter();

  useEffect(() => {
    for(var i = 0; i < routeConfig.length; i++){
      if(routeConfig[i].path == router.pathname || router.pathname.includes(routeConfig[i].path)){
        setConfig({...routeConfig[i]})
      }
    }
  }, [router.pathname])

  const handleBackClick = () => {
    //route to last tab
    router.back();
  };

  const handleListClick = () => {
    router.push('/list');
  };



  return (
    <AppBar position="fixed" color="secondary" sx={{ backgroundColor: '#DD2B22' }}>
      <Toolbar sx={{position:"relative"}}>
        {/* Back Button */}
        {config.showBackButton && (
          <IconButton sx={{position:"absolute", left:"1rem"}} color="inherit" aria-label="back" onClick={() => handleBackClick()}>
            <ArrowBackIcon />
          </IconButton>
        )}

        {/* Centered Logo */}
        <Box align="center" sx={{ flexGrow: 1 }}>
          <img src="https://mexicoxport.com/wp-content/uploads/2019/11/h-e-b-abre-en-monterrey-una-tienda-exclusiva-para-repartidores-de-aplicaciones.png" alt="Your Logo" height={32} />
        </Box>

        {/* List Button */}
        {config.showListButton && (
          <IconButton sx={{position:"absolute", right:"1rem"}}  color="inherit" aria-label="list" onClick={() => handleListClick()}>
            <ListAltIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
