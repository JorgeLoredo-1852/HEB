import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/grid";
import "swiper/css";

import React from "react";
import Slider from "react-slick";
import styles from "./categories.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import SearchContext from "@/hooks/SearchContext";
import { Category } from "@mui/icons-material";
import { arr } from "./arr";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Grid, Pagination } from "swiper";

const Categories = () => {
  const { searchInfo, setSearchInfo } = useContext(SearchContext);
  const router = useRouter();

  const selectCategory = (category) => {
    router.push("/search");
    setSearchInfo(category);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className={styles.container}>
        <div className={styles.title}>Categorias</div>
        <Link href={"/search"}>
          <div className={styles.btn}>Ver todo</div>
        </Link>
      </div>
      <div style={{ height: "17rem" }}>
        <Swiper
          slidesPerView={3}
          grid={{ rows: 2 }}
          spaceBetween={10}
          modules={[Grid]}
          style={{ height: "100%", width: "100%" }}
          className={styles.swiper}
        >
          {arr.map((category) => (
            <SwiperSlide
              key={category.id}
              onClick={() => {
                selectCategory(category.name);
              }}
              className={styles.swiperSlide}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <div
                  className={styles.swiperOverlay}
                  style={{
                    backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3)), url(${category.img})`,
                  }}
                ></div>
              </div>
              <div className={styles.swiperTitle}>{category.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
