import { useEffect, useRef, useState } from 'react';
import React from 'react';

declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
}

type AudioVisualizerProps = {
  stream: MediaStream | null;
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
};

export const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const getUserMedia = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(setStream)
      .catch(console.error);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !stream) return;

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 8192;

// Create a BiquadFilterNode and configure it
const filter = audioContext.createBiquadFilter();
filter.type = "lowpass";  // Approximates Chebyshev if you cascade filters
filter.frequency.value = 1000; // Adjust to the desired cutoff frequency

// Connect nodes
const source = audioContext.createMediaStreamSource(stream);
source.connect(filter);
filter.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      // Clear with black background

      ctx.fillStyle = "#333333";

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient bars
      const barWidth = canvas.width / bufferLength;
      let barHeight;
      let x = 0;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "#FF66FF"); // Vibrant magenta
gradient.addColorStop(0.5, "#66FFFF"); // Vibrant cyan
gradient.addColorStop(1, "#66FF66"); // Vibrant green
ctx.fillStyle = gradient;

// Optional: Add glow for additional contrast
ctx.shadowColor = "#FFFFFF"; // Bright white glow

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      // Draw frequency labels
      ctx.font = "1vmin Arial";
      const frequencies = [ 500,4000, 8000,16000];
 const spacing = 12; // Minimum spacing between labels

frequencies.forEach((freq, index) => {
  const pos = ((freq / 20000) * canvas.width);
  const text = `${freq} Hz`;
  const textWidth = ctx.measureText(text).width;

  // Ensure text stays within canvas bounds
  let xPos = Math.min(pos, canvas.width - textWidth - spacing);

  // Avoid overlap with the previous label
  if (index > 0) {
    const prevFreq = frequencies[index - 1];
    const prevPos = ((prevFreq / 20000) * canvas.width);
    const prevTextWidth = ctx.measureText(`${prevFreq} Hz`).width;
    const prevXPos = Math.min(prevPos, canvas.width - prevTextWidth - spacing);

    if (xPos < prevXPos + prevTextWidth + spacing) {
      xPos = prevXPos + prevTextWidth + spacing;
    }
  }

  ctx.fillText(text, xPos, canvas.height - 5);
});
    };

    draw();

    return () => {
      audioContext.close();
    };
  }, [stream]);

  return (
    <>
    <div style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
      <button className="hlight" onClick={getUserMedia}> <h4> Enable Microphone Input</h4></button>

      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: "#333333",
          border: "1px solid #0FF",
          borderRadius: "1.0svw", // Rounded corners
          width: '100%',
            height: '40svh'
        }}
      />
<br/>
    </div>


</>
  );
};
