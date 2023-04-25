import * as React from 'react';
import styles from './header.module.css'
//import { Box, Card, CardActionArea, CardMedia, Hidden, ImageList, Typography } from '@mui/material';
import Router from 'next/router';

export default function HeaderImg(props) {
    return (
            <div className={styles.headerContainer}>
                <img className={styles.headerImg} src={props.imagen}/>
                <div className={styles.headerOverlay}></div>
                <div className={styles.headerText}>
                    {props.texto}
                </div>
            </div>
    )
}