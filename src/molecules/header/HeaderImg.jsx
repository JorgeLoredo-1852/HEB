import * as React from 'react';
import styles from './header.module.css'
import { Box, Card, CardActionArea, CardMedia, Hidden, ImageList, Typography } from '@mui/material';

export default function HeaderImg(props) {
    return (
        <div style = {{position: "relative"}}> 
            <Box sx={{
                    width: "100vw",
                    height: props.height,
                    overflow: "hidden",
                    alignItems: "center",
                    display: "flex"
                }}>
                <Box component = "img" style={{width: "inherit"}} src={props.imagen}></Box> 
                <Typography variant = "h5" component = "div" sx = {{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    mx: 3,
                    zIndex: (theme) => theme.zIndex.drawer+1,
                    my: 1
                }}>{props.texto}</Typography> 
            </Box>
        </div>
    )
}