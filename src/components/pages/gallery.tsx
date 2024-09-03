import React, { useRef, useEffect } from 'react';
import { NavBar } from '../common/navbar';
import * as THREE from 'three';
/* ADD GUI CONTROLS FOR USERS*/

export const Visualizer: React.FC = () => {
  const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;
  type Images = Record<string, string>;
  const images: Images = {
    bipolaroutput: getImgPath('bipolarPSUoutput.webp'),
    transformer: getImgPath('audiotransformer.webp'),
    volts: getImgPath('DCvoltage.webp'),
    schematic: getImgPath('IMG_4052.webp')
    // Add other images here
  };

  return (
    <>
      <NavBar />

      <h1 className="hlight"> Welcome to my fun page!</h1>
      <p className="lead"> <b> This page contains a gallery with live demos of more projects, analog circuits, and short tutorials by me! </b> </p>

      <hr className="my-4" />

      <b>
        <h2 className="hlight"> BIPOLAR AC / DC RECTIFIER POWER SUPPLY </h2>
      </b>

      <h4 className="lead" >
        I built a bipolar power supply circuit from scratch using a 24VAC 2A center-tapped transformer and a full-wave rectifier for +/-/ground DC voltage interfacing. I built the circuit using a full bridge rectifier array of diodes, and 16 AWG high-current wire. I built this to use for an audio amplifier project, which needed a bipolar power supply for the most clean and precise audio operation.
      </h4>
      <br />
      <div style={{ display: 'grid' }}>
        <div className='fadeSide'>
          <img src={images.schematic} className="projImg" />
          <img src={images.bipolaroutput} className="projImg" />
          <img src={images.transformer} className="projImg" />
          <img src={images.volts} className="projImg"  />
        </div>
        <br />
      </div>

      <hr />
      <div className='visualizer' >

        <b>
          <h2 className="hlight"> LORENTZ ATTRACTOR </h2>
        </b>

        <div style={{ display: 'grid', margin: 'auto', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '70vw', textAlign: 'center' }}>
          <h4 className="lead" >
            The Lorentz attractor is a graph plotted by a system of solutions to the lorentz equations, that can visually be seen here displaying seemingly "chaotic" and random behavior. One example of chaotic behavior that can generate this object is the behavior of weather prediction algorithms, which can erraticly fail to predict the weather at critical points. To plot this behavior, I wrote the code for the recursive algorithms and programmed the differential equations into a 3d modeling software, three.js.
          </h4>
        </div>

        <hr />
        <div className='lorentz'>

          <LorenzAttractor />
        </div>


        <br />
        <br />
        <hr />
      </div>


    </>
  );
};

const LorenzAttractor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, (window.innerWidth / window.innerHeight), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const width = 450; // Set to the width of the parent element
    const height = 400; // Set to the height of your content
    renderer.setSize(width, height);
    ref.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = [];

    // Lorenz Attractor parameters
    const a = 10, b = 28, c = 8 / 3;
    let x = 0.1, y = 0, z = 0;

    for (let i = 0; i < 10000; i++) {
      const dx = a * (y - x);
      const dy = x * (b - z) - y;
      const dz = x * y - c * z;

      x += dx * 0.01;
      y += dy * 0.01;
      z += dz * 0.01;

      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);

    scene.add(line);

    camera.position.z = 70;
    let animationId: number;

    const animate = function () {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = (window.innerWidth / window.innerHeight);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      ref.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="lorenz-attractor" ref={ref} />;
};

export default LorenzAttractor;
