import { useEffect, useRef } from "react";

function Logo({ width = 50, height = 50, color = "#7c3aed" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

   
    ctx.clearRect(0, 0, width, height);

    
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 2 - 2, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();

    
    ctx.font = `bold ${width / 2.2}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("UK", width / 2, height / 2 + 1);

  }, [width, height, color]);

  return <canvas ref={canvasRef} width={width} height={height} className="logo-canvas" />;
}

export default Logo;
