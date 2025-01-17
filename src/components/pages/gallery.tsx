import React from 'react';
import { NavBar } from '../common/navbar';

/* ADD GUI CONTROLS FOR USERS*/

export const Visualizer: React.FC = () => {
  const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;
  type Images = Record<string, string>;
  const images: Images = {
    bipolaroutput: getImgPath('bipolarPSUoutput.webp'),
    transformer: getImgPath('IMG_4393.webp'),
    volts: getImgPath('DCvoltage.webp'),
    schematic: getImgPath('IMG_4052.webp')
    // Add other images here
  };

  return (
    <>
      <NavBar />

      <h1 className="hlight"> Welcome to my fun page!</h1> <br/>
      <h3 className="hlight"> <b> This page contains a gallery with live demos of more projects, analog circuits, and short tutorials by me! </b> </h3> <br/>
     <a href="https://github.com/austinhutchen/circuits" rel="nopener noreferrer"><h3>Full repository with all circuit schematics in PDF format</h3></a>
      <br/>
      <b>
        <h2 className="hlight"> BIPOLAR LINEAR POWER SUPPLY </h2>
      </b>
      <br />

     

     <div className="projDesc">
<div className="fadeSide">

          <p> Built a linear bipolar power supply circuit using a 40VAC 2A center-tapped transformer and a diode-grid full-wave rectifier for +/-/ground DC voltage interfacing. I built the circuit using a full bridge rectifier array of diodes, and 16 AWG high-current wire. I built this to use for an audio amplifier project, which needed a bipolar power supply for the most clean and precise audio operation.
          </p>
</div>     
</div>
<br/>
        <div className="analogCircuits" >
        <img src={images.schematic}  className="projImg" id="rotate-180" />
        <img src={images.bipolaroutput} className="projImg"/>
        <img src={images.transformer} className="projImg"/>
        <img src={images.volts} className="projImg"/>
        </div>



      <br />
      <b>
        <h2 className="hlight"> ADJUSTABLE FREQUENCY BIRD CHIRP GENERATOR (PIEZOELECRIC, SOLAR POWERED)</h2>
      </b>
<br/>
    </>
  );
};
