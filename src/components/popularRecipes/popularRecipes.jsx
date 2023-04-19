import Link from "next/link";
import styles from "./popularRecipes.module.css";

import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { listOfData } from "./recipes"
import Image from "next/image";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useRouter } from "next/router";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PopularRecipes = () => {
    
    const router = useRouter();

    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    const [cardNum, setCardNum] = useState(10)

    useEffect(()=>{
        if(downLg && downMd && downSm){
            setCardNum(2.5)
        } 
        else if (downLg && downMd){
            setCardNum(4)
        }
        else if (downLg){
            setCardNum(5)
        } else {
            setCardNum(8)
        }

    },[downLg, downMd, downSm])

    const handleClick = (link) => {
        router.push(link);
      };

    return(
        <>
        <div className={styles.container}>
            <div className={styles.title}>Recetas más Populares</div>
            <Link href={"/receta/1"}>
                <div className={styles.btn}>Ver todo</div>
            </Link>
        </div>
        <Swiper
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode]}
            spaceBetween={10}
            slidesPerView={cardNum}
        >
            {
                listOfData.map((recipe) => (
                    <SwiperSlide key={recipe.id} onClick={()=>{handleClick(`/receta/${recipe.id}`)}} className={styles.swiperSlide}>
                        <Image src="/images/food.png" width={230} height={230} alt="a"/>
                        <div className={styles.swiperOverlay}></div>
                        <div className={styles.swiperTitle}>Pasta a la Bolognesa</div>
                        <div className={styles.cookingTime}>
                            <div className={styles.timeContainer}>
                                <AccessTimeIcon fontSize="large" sx={{ color: "white"}}/>
                            </div>
                            <div style={{color:"white"}}>
                                <div className={styles.timeNumber}>60</div>
                                <div className={styles.timeTag}>Min</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </>
    )
}

export default PopularRecipes;