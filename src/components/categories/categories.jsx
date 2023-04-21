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
      <div>
        <div className={styles.container}>
            <div className={styles.title}>Categories</div>
            
        </div>
        <Slider {...settings}>
          {arr.map((num) => (
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="/images/food.png"
              sx={{ borderRadius: '16px'}}
              
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div" sx={{ textAlign: 'center' }} >
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
