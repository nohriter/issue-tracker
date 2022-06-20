import React, { useEffect, useRef } from "react";

function Matrix() {
    const canvasRef = useRef(null);
    const canvasWidth = 1500;
    const canvasHeight = 800;
    const cols = Math.floor(canvasWidth / 20) + 1;
    const ypos = Array(cols).fill(0);

    const drawMatrix = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = canvasWidth;
        canvas.height = canvasHeight; // 에러는 안나지만 크기 조절이 안되네...
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = "#0f0";
        ctx.font = "8pt monospace";

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 10);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    };

    useEffect(() => {
        const intervalPoint = setInterval(() => {
            console.log("matrix drawing");
            drawMatrix();
        }, 5000);
        return () => clearInterval(intervalPoint);
    }, []);

    return <canvas ref={canvasRef} />;
}

export default Matrix;
