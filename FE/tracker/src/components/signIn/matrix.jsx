import { FormControlUnstyledContext } from "@mui/base";
import React, { useEffect, useRef } from "react";

// function Matrix() {
//     const canvasRef = useRef(null);
//     const canvasWidth = 1500;
//     const canvasHeight = 800;
//     const cols = Math.floor(canvasWidth / 10) + 1;

//     // 다른 버전
//     const tileSize = 20;
//     const maxStackHeight = 20;
//     const columns = [];
//     const fadeFactor = 0.05;

//     console.log(cols);
//     const ypos = Array(cols).fill(canvasHeight);

//     const korean = "이슈트레커에캔버스넣기진짜어렵네";
//     const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const nums = "0123456789";

//     const alphabet = korean + latin + nums;
//     const fontSize = 8;

//     const init = () => {
//         const canvas = canvasRef.current;
//         maxStackHeight = Math.ceil(canvas.height / tileSize);

//         for (let i = 0; i < canvas.width / tileSize; i++) {
//             let column = {};
//             column.x = i * tileSize;
//             column.stackHeight = 10 + Math.random() * maxStackHeight;
//             column.stackCounter = 0;
//             columns.push(column);

//             console.log(column);
//         }
//     };

//     const drawMatrix = () => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         canvas.width = canvasWidth;
//         canvas.height = canvasHeight; // 에러는 안나지만 크기 조절이 안되네...
//         // ctx.rotate(-30 * (Math.PI / 180));
//         ctx.fillStyle = "#000000";
//         ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//         ctx.fillStyle = "rgba(0,0,0,0.05)";
//         ctx.fillStyle = "#0f0";

//         ctx.font = fontSize + "monospace";

//         ypos.forEach((y, ind) => {
//             const text = alphabet.charAt(Math.floor(Math.random() * 8));
//             // const text = String.fromCharCode(Math.random() * 10);
//             const x = ind * 20;
//             ctx.fillText(text, x, y);
//             if (y * fontSize > canvasHeight && Math.random() > 0.97)
//                 ypos[ind] = 0;
//             // if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
//             else ypos[ind] = y + 20;
//         });
//     };

//     useEffect(() => {
//         const intervalPoint = setInterval(() => {
//             console.log("matrix drawing");
//             drawMatrix();
//         }, 100);
//         return () => clearInterval(intervalPoint);
//     }, []);

//     return <canvas ref={canvasRef} />;
// }

const tileSize = 20;
const fadeFactor = 0.05;

const canvasWidth = 1500;
const canvasHeight = 800;

let columns = [];
let maxStackHeight;

const fontSize = 12;
const slightSmallFontSize = tileSize - 2;

function Matrix() {
    const canvasRef = useRef(null);

    // divide the canvas into columns.
    const init = (w, h) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        maxStackHeight = Math.ceil(w / tileSize);

        for (let i = 0; i < w / tileSize; i++) {
            const column = {};
            column.x = i * tileSize;
            column.stackHeight = 10 + Math.random() * maxStackHeight;
            column.stackCounter = 0;
            columns.push(column);
            console.log(columns);
        }
    };

    const draw = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "rgba( 0 , 0 , 0 , " + fadeFactor + " )";
        ctx.font = slightSmallFontSize + "px " + "monospace";
        // ctx.fillStyle = "rgb(0,255,0)";

        for (let i = 0; i < columns.length; i++) {
            // pick a random ascii character 이 부분은 다른 글자로 수정가능할거 같은데 일단 이렇게 놔두기로 함.

            const randomCharacter = String.fromCharCode(
                33 + Math.floor(Math.random() * 94)
            );
            ctx.fillText(
                randomCharacter,
                columns[i].x,
                columns[i].stackCounter * tileSize + tileSize
            );

            // if (columns[i].stackCounter++ >= columns[i].stackHeight) {
            //     columns[i].stackHeight = 10 + Math.random() * maxStackHeight;
            //     columns[i].stackCounter = 0;
            // }
        }
    };

    useEffect(() => {
        init(canvasWidth, canvasHeight);
        const intervalPoint = setInterval(() => {
            console.log("matrix drawing");
            draw();
        }, 2000);
        return () => clearInterval(intervalPoint);
    }, []);

    return <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} />;
}

export default Matrix;
