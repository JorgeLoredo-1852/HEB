import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const MyAppBar = ({ showBackButton, showListButton, listLink, backLink }) => {
  const [value, setValue] = useState('/');
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <AppBar position="fixed" color="secondary" sx={{ backgroundColor: '#DD2B22' }}>
      <Toolbar>
        {/* Back Button */}
        {showBackButton && (
          <IconButton edge="start" color="inherit" aria-label="back" onClick={() => handleClick(backLink)}>
            <ArrowBackIcon />
          </IconButton>
        )}

        {/* Centered Logo */}
        <Box align="center" sx={{ flexGrow: 1 }}>
          <img src="https://mexicoxport.com/wp-content/uploads/2019/11/h-e-b-abre-en-monterrey-una-tienda-exclusiva-para-repartidores-de-aplicaciones.png" alt="Your Logo" height={32} />
        </Box>

        {/* List Button */}
        {showListButton && (
          <IconButton edge="end" color="inherit" aria-label="list" onClick={() => handleClick(listLink)}>
            <ListAltIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
