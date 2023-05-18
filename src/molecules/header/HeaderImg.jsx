import * as React from 'react';
import styles from './header.module.css'
//import { Box, Card, CardActionArea, CardMedia, Hidden, ImageList, Typography } from '@mui/material';
import Router from 'next/router';
import { PropaneSharp } from '@mui/icons-material';

export default function HeaderImg(props) {
    return (
            <div className={styles.headerContainer} style={{backgroundSize: "cover", backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3)), url(${props.imagen})`}}>
                <div className={styles.headerOverlay}></div>
                <div className={styles.headerText}>
                    {props.texto}
                </div>
            </div>
    )
}