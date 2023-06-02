import Link from "next/link";
import styles from "./popularRecipes.module.css";

import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { listOfData } from "./recipes";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetCollection } from "../../api/firebase.js";

const PopularRecipes = () => {
  const router = useRouter();

  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down("lg"));
  const downMd = useMediaQuery(themeM.breakpoints.down("md"));
  const downSm = useMediaQuery(themeM.breakpoints.down("sm"));
  const [cardNum, setCardNum] = useState(10);
  const recetas = GetCollection("Recetas");

  useEffect(() => {
    if (downLg && downMd && downSm) {
      setCardNum(2.5);
    } else if (downLg && downMd) {
      setCardNum(4);
    } else if (downLg) {
      setCardNum(5);
    } else {
      setCardNum(recetas.length);
    }
  }, [downLg, downMd, downSm]);

  const handleClick = (link) => {
    router.push(link);
  };

  return recetas.length == 0 ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Recetas más Populares</div>
        <Link href={"/search"}>
          <div className={styles.btn}>Ver todo</div>
        </Link>
      </div>
      <div style={{ height: "15rem" }}>
        <Swiper
          grabCursor={true}
          freeMode={true}
          modules={[FreeMode]}
          spaceBetween={10}
          slidesPerView={cardNum}
          style={{ height: "100%", width: "100%" }}
        >
          {recetas.map((recipe) => (
            <SwiperSlide
              key={recipe.id}
              onClick={() => {
                handleClick(`/receta/${recipe.id}`);
              }}
              className={styles.swiperSlide}
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
                  <AccessTimeIcon fontSize="medium" sx={{ color: "white" }} />
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

export default PopularRecipes;
