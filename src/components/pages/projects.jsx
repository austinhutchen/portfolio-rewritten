import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import React from 'react';
import shell from './images/shell.PNG'
import encryptc from './images/encryptc.JPG'
import maps from './images/maps.jpg'
import butterfly from './images/animate.mov'
import gesture from './images/gesture.mov'
import graph from './images/graph.mov'
import calculator from './images/calculator.PNG'
import my_interface from './images/interface.JPG'
import '../../css/projects.css'
const Body = () => {
    return (
        <>
            <section>
                <div className="lead">
                    <ul className="projectdesc">
                        <b>
                            <li>
                                <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                                    THIS WEBSITE (REACT/JS)
                                </a>
      <h5 > Click the title text for a link to the source code. </h5>
                                                       </li>

                            <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    UNIX KERNEL SHELL (C)
                                </a>
      <br/>
   <img src = {shell} height ="140vh" width ="auto"/> 

   <h5 > A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal. </h5> 
                            </li>


                            <li>
                                <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                                    rel="noopener noreferrer">
                                    ENCRYPTED TEXT EDITOR (C++)
                                </a>
  <br/>
       <img src = {encryptc} height ="140vh" width ="auto"/> 

      <h5> A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.</h5> 
     </li>
                           
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (Flutter/C++)
                                </a>
      <br/>
 <img src = {maps} height ="140vh" width ="auto"/> 

   <h5 > A google maps app clone that I coded using flutter and the dart framework. Spent the most time organizing and dealing with location data from google's maps API endpoint, and building a usable interface simialar to google maps. </h5> 
          </li>
   <li>
                                <a href="https://github.com/austinhutchen/gestureAI.git" target="_blank"
                                    rel="noopener noreferrer">
                                    EMBEDDED GESTURE SENSOR (C++/MACHINE LEARNING)
                                </a>
  <br/>
       <img src = {gesture} height ="140vh" width ="auto"/> 

      <h5>A machine learning model implemented on an arduino nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures, as seen above in the video. </h5> 
    
                            </li>
   <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    4x4 INTERRUPT UART INTERFACE (C)
                                </a>
      <br/>
   <img src = {my_interface} height ="140vh" width ="auto"/> 

   <h5 > Using my knowledge of systems processes, I utilized a display interface to work directly with a 4x4 button matrix, and print messages and calculations to the screen, with an arduino nano. </h5> 
                            </li>


   <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                   ARDUINO BYTE ANIMATIONS (FOR FUN, C) 
                                </a>
      <br/>
   <img src = {butterfly} height ="140vh" width ="auto"/> 

   <h5> I coded many byte-level animations for embedded systems. The animations utilized a bit mask, and a frame buffer for displaying the images into local register memory. You can see the demo above.</h5> 
                            </li>
 
                            <li>
                                <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/DART)
                                </a>
  <br/>
  <img src = {calculator} height ="140vh" width ="auto"/> 

   <h5> A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.</h5> 

                            </li>

                        

                            <li>
                                <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                                    REDDIT STATISTICS ENGINE (PYTHON)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A statistics engine coded with numpy and python which runs in the terminal, has a fully functional built-in search engine, and many different graphical display options for reddit data analysis. </h5> 

                            </li> 
                             <li>
                                <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL WEATHER APP (REACT NATIVE)
                                </a>

  <img src = {""} height ="140vh" width ="auto"/> 

   <h5>One of my first apps, fetched information about the weather from a javascript API before caching locally and displaying to the user. Incorporated state and event-handling, and was my introduction into mobile programming. </h5> 

       </li>  <br/>

                            <li>
                                <a href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                                    MINDFUL JOURNALLING APP (REACT NATIVE/JAVA)
                                </a>
  <img src = {""} height ="140vh" width ="auto"/> 
      <h5> An app I made for personal use, that promped the user with daily quotes fetched from an API, and stored journal entries in the user's local cache system. </h5>
                            </li>
                         
<br/>
    <li>
                                <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    2D GRAPHING CALCULATOR (JAVASCRIPT)
                                </a>
  <br/>
  <img src = {graph} height ="140vh" width ="auto"/> 

   <h5>   A graphing calculator coded in javascript which utilized the plotjs library to plot real-valued functions in up to 3 dimensions. Seen in the video is the zoom function, which works by analyzing the many derivatives of the given function. Coded for integration with the calculator app. </h5> 

                            </li>


                            <li>
                                <a href="https://github.com/austinhutchen/AuxillarySearch.git" target="_blank" rel="noopener noreferrer">
                                    O(N*LOG(N)) UNIVERSITY SEARCH PROBE SYSTEM  (C++)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A comprehensive university search engine backend, much like CU's own class search. This project involved the use of various hard-coded data structures,  implementing a BST class with functions for adding professor nodes, and a hash table with class numbers and information (stored in the forms of linked lists). The algorithm allowed for efficient searching, dropping, and listing of information related to any given course, supplied through a .txt file for the parser to read.</h5> 

                            </li>

                        





                        </b>
                    </ul>
                </div>
                <br></br>
            </section>
        </>
    )
}

export const Projects = () => {
    // integrate display component here
    return (
        <section>
            <Nav></Nav>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <div style={{ paddingBottom: 8 }}>

                    <h1 className="hlight" >
                        <b>PERSONAL PROJECTS:</b>
                    </h1>

                </div>

                <CommonCarousel />
                <Body />
                <br />

            </motion.div>
        </section>

    )
}
