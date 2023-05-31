import Link from "next/link";
import styles from "./myRecipes.module.css";

import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { listOfData } from "./recipes";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetCollection } from "@/api/firebase";

const MyRecipes = () => {

  function shuffle(arr) {
    let cur = arr.length;
    while(cur != 0){
      let rand = Math.floor(Math.random() * cur);
      cur--;
      [arr[cur], arr[rand]] = [arr[rand], arr[cur]];
    }
    return arr;
  }
  
  const router = useRouter();

  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down("lg"));
  const downMd = useMediaQuery(themeM.breakpoints.down("md"));
  const downSm = useMediaQuery(themeM.breakpoints.down("sm"));
  const [cardNum, setCardNum] = useState(1.2);
  const recetas = shuffle(GetCollection("Recetas"));


  

  useEffect(() => {
    if (downLg && downMd && downSm) {
      setCardNum(1.2);
    } else if (downLg && downMd) {
      setCardNum(3.4);
    } else if (downLg) {
      setCardNum(5.4);
    } else {
      setCardNum(7.4);
    }
  }, [downLg, downMd, downSm]);

  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Prueba algo nuevo </div>
        <Link href={"/receta/1"}>
          <div className={styles.btn}>Ver todo</div>
        </Link>
      </div>
      <div style={{ height: "15.5rem" }}>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={cardNum}
          centeredSlides={true}
        >
          {recetas.map((recipe) => (
            <SwiperSlide
              key={recipe.id}
              onClick={() => {
                handleClick(`/receta/${recipe.id}`);
              }}
              className={styles.swiperSlideMy}
            >
              <div
                className={styles.swiperOverlay}
                style={{
                  backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3)), url(${recipe.imagen})`,
                }}
              ></div>
              <div className={styles.swiperTitle}>{recipe.nombre}</div>
              <div className={styles.cookingTime}>
                <div className={styles.timeContainer}>
                  <AccessTimeIcon fontSize="large" sx={{ color: "white" }} />
                </div>
                <div style={{ color: "white" }}>
                  <div className={styles.timeNumber}>{recipe.tiempo}</div>
                  <div className={styles.timeTag}>Min</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MyRecipes;
