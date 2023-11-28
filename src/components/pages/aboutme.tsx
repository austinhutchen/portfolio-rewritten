import React from 'react'
import { Nav } from "../common/navbar.tsx"
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
export const Aboutme = (props) => {

  return (
    <>
      <Nav />

      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <h1 className="hlight" >
          <b>
            ABOUT!
          </b>
        </h1>
      </motion.div>
      <About data={props.data} />


    </>
  )
}


const About = (props) => {
  const keys = [
    {
      desc: "Welcome! I'm a software engineer who builds embedded systems and multi-page software applications, and I have plenty of hobbies! ",
      url: props.data[0],
    }
    ,
    {
      desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my understanding of algorithms and P vs NP runtimes. ",
      url: props.data[1],
    },
    {
      desc: "I spend most of my time building embedded systems, to automate daily tasks. I stick to using e-waste materials for the junction boxes, for recycling purposes.",
      url: props.data[2],
    },
    {
      desc: "I read mathematics from my extensive collected library in my free time. I have particular fascinations with Boolean & Linear Algebra, Complex & Real Analysis, and Group Theory.",
      url: props.data[3],
    }
    ,
    {
      desc: "I love spending time with my family. Without their support and love, I wouldn't be where I am today.",
      url: props.data[4],

    },
    {
      desc: "I love my cats!",
      url: props.data[5],

    },
    {
      desc: "I love to spend time out in nature!",
      url: props.data[6],

    },


  ];

  const settings = {
    slidesToShow: 1,
    centerMode: true,
    lazyLoad: 'anticipated',
    Width: '70%',
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    adaptiveHeight: true,
  }
  const slider = React.useRef(null);
  return (
    <div className="sc">
      <Slider ref={slider} {...settings} >

        {keys.map(data => {
          return (

            <>
              <img src={data.url} style={{ borderRadius: '(200 / 2)em', borderStyle: "solid", border: "0.45vh solid #0BA" }} />

              <button type="button" className="prev-slick" onClick={() => slider?.current?.slickPrev()}> <HiArrowNarrowLeft />  </button>
              <button type="button" className="next-slick" onClick={() => slider?.current?.slickNext()}> <HiArrowNarrowRight /> </button>
              <fieldset >
                <p style={{ color: 'cornsilk', fontSize: "2.5vh", paddingTop: '0.3em', fontFamily: "Gill Sans, Gill Sans MT,Calibri,Trebuchet MS,sans-serif", fontWeight: 350 }}>


                  <b className="legend">
                    {data.desc}



                  </b>
                </p>
              </fieldset>


            </>
          );
        })}

      </Slider>
    </div>
  );

}

