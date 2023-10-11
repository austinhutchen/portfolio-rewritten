import { Nav } from "../common/navbar"
import React, { Component } from "react";
import { motion } from "framer-motion"; 
import me from "../images/me4.jpg";
import coding from "../images/coding.JPG";
import family from "../images/family.jpeg";
import nature from "../images/nature.jpg";
import mimi from "../images/mimi.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";

export const Aboutme = () =>
 {
    return (
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <Nav />
                <Display  />
        </motion.div>
    )
}


export default class Display extends Component  
{
  constructor(props){
super(props);
        this.state = {
           user:""
       }

    }

  render() {

    var keys=[
            {
              desc:"My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more:",
              url:me
            }
            ,
            {
              desc:             "I love coffee and coding!",
              url:coding
            },
            {
              desc:             "I love quality family time!",
              url:family
            },
            {
              desc:    "I love hiking!",
              url:mimi
            },
            {
              desc:  "I love cats!",
              url:nature
            }
         
           
          ] ;
   const settings = {
      dots: true,
      infinite: true,
      speed: 150,
        slidesToShow: 1,
      slidesToScroll: 1,
lazyLoad:true,
   centerMode: true,

    };
       return (<div style={{paddingTop:10}}> 
<h1 className="hlight" >
              About me!
              </h1>
          <div className="sc">
        <Slider {...settings}>    
         {keys.map( data =>{   
             return(
               <div className="slick-slide">
                <h2> 
             {data.desc}
               </h2>
               <img src={data.url}/>
               </div>
             ); }) }                                  
                </Slider>     
     </div>
      </div>
    );
  }
}

