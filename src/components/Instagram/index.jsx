import { fontSize } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import vino1 from "../../img/vino01.jpg"
import vino2 from "../../img/vino02.jpg"
import vino3 from "../../img/vino03.jpg"
import vino4 from "../../img/vino04.jpg"
import vino5 from "../../img/vino05.jpg"
import vino6 from "../../img/vino06.jpg"
import vino7 from "../../img/vino07.jpg"
import vino8 from "../../img/vino08.jpeg"
import vino9 from "../../img/vino09.jpg"
import vino10 from "../../img/vino10.jpg"



const Instagram = () => {

  const imagenes = [
    vino1,vino2,vino3,vino4,vino5,vino6,vino7,vino8,vino9,vino10
  ]
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    return (
      <div>
        <h2 style={{
          display: "flex",
          justifyContent: "center"
        }}> Seguinos en nuestro Instagram como <span id="span">@QueseriaSinUnVino</span> </h2>
        <Slider {...settings}>
          
          {imagenes.map(img => (<div>
            <img style={{
              minWidth: "200px",
              height: "200px",
              objectFit: "cover"
              
              
            }}src={img} alt="" />
          </div>) )
          }
          
        </Slider>
      </div>
    );
  }


  

  export default Instagram 