import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./categories.module.css";
import { ArrowBack } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link";
import Box from "@mui/material";

const arr = [1,2,3,4,5,6,7,8,9,10,11,12]



export default class Categories extends Component {
  render() {
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
            <CardActionArea key={`cardArr${num}`}>
              <CardMedia
                component="img"
                height="100"
                image="/images/food.png"
                sx={{ borderRadius: '16px'}}
                
              />
              <CardContent sx={{paddingTop: "5px", paddingBottom: "10px"}}>
                <Typography gutterBottom variant="p" component="div"  >
                  Desayunos
                </Typography>
              </CardContent>
            </CardActionArea>))}
            {/* <div><h3>{num}</h3></div> */}
          </Slider>
        </div>
   
    );
  }
}
