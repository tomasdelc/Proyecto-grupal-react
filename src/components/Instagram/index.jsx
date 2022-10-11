

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Instagram/styles.css"
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
      arrows: false,
      speed: 1000,
      slidesToShow:  5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            
          }
        }
      ]
    };

    return (
      <div>
        <h3 > Seguinos en nuestro Instagram como:</h3>
         <a href="https://www.instagram.com/">  @QueseriaSinUnVino</a> 
        
        <Slider {...settings}>
          
          {imagenes.map(imgs => (<div>
            <img className="carrusel" src={imgs} alt="" />
          </div>) )
          }
          
        </Slider>
      </div>
    );
  }

  export default Instagram 