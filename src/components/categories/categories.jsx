import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from "./categories.module.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import SearchContext from "@/hooks/SearchContext";
import { Category } from "@mui/icons-material";

const arr = ["Desayunos", "Comidas", "Cenas", "Aperitivos", "Antojitos", "Bebidas", "Rápida", "Postres"]
const settings = {
  className: "center",
  centerMode: false,
  infinite: false,
  slidesToShow: 3,
  speed: 700,
  rows: 2,
  slidesPerRow: 1,
  swipeToSlide: true,
  arrows: false,
};

const Categories = () => {
    const { searchInfo, setSearchInfo } = useContext(SearchContext)
    const router = useRouter()

    const selectCategory = (category) => {
      router.push('/search')
      setSearchInfo(category)
    }

    return (
      
        <div style={{marginBottom: "50px"}}>
          <div className={styles.container}>
              <div className={styles.title}>Categories</div>
              <Link href={""}>
                  <div className={styles.btn}>Ver todo</div>
              </Link>
        
          </div>
          <Slider {...settings}>
            {arr.map((num) => (
            <CardActionArea key={`cardArr${num}`} onClick={() => selectCategory(num)}>
              <CardMedia
                component="img"
                height="100"
                image="/images/food.png"
                sx={{ borderRadius: '16px'}}
                
              />
              <CardContent sx={{paddingTop: "5px", paddingBottom: "10px"}}>
                <Typography gutterBottom variant="p" component="div"  >
                  {num}
                </Typography>
              </CardContent>
            </CardActionArea>))}
            {/* <div><h3>{num}</h3></div> */}
          </Slider>
        </div>
   
    );
  
}

export default Categories;