import React, { useState, useRef, useEffect } from 'react';
import { number, color } from '@storybook/addon-knobs';

import './_svg.scss';




const SinCanvas = () => {
    let canvasRef = useRef();
    const [ctx, setCtx] = useState();
    const [params, setParams] = useState({});
    
    
    const options = {
        range: true,
        min: 0,
        max: params.height,
        step: 1,
    };
    const optionsF = {
        range: true,
        min: -0.01,
        max: 1,
        step: .01,
    };
    const optionsL = {
        range: true,
        min: -0.01,
        max: .01,
        step: .001,
    };
    const optionsA = {
        range: true,
        min: -300,
        max: 300,
        step: 1,
    };

    const optionsW = {
        range: true,
        min: 0,
        max: 50,
        step: 1,
    };

    const waveY = number('Wave Y Cord', window.innerHeight/2 , options, 'group-wave');
    
    const frequency = number('Frequency', .01, optionsF, 'group-wave');
    const length = number('Length', .01, optionsL, 'group-wave');
    const amplitude = number('Amplitude', 100, optionsA, 'group-wave');
    const cLineWidth = number('stroke width', 1, optionsW, 'group-wave');

    const canvasColor = color('fade color', 'rgba(0,0,0,0.01)', 'group-style');
    const lineColor = color('line color', 'rgba(0,255,193,0.08)', 'group-style');
    const shadowColor = color('shadow color', 'rgba(255,255,255,1)', 'group-style');
    const shadowBlurWidth = number('shadowBlur', 1, optionsW, 'group-style');


    
    

    useEffect(() => {
        if(canvasRef != null) {
            const canvas = canvasRef.current;
            setParams({width:window.innerWidth, height: window.innerHeight})
            setCtx(canvas.getContext('2d'));
        }


    }, []);
    let increment = frequency;
    
    const animate= () => {
            requestAnimationFrame(animate);
            ctx.fillStyle = canvasColor;
            ctx.fillRect(0, 0, params.width, params.height);
            ctx.beginPath();
            
            ctx.moveTo(0, params.height /2);
            
            for (let i = 0; i < params.width; i ++) {
                    ctx.lineTo(i ++, waveY + Math.sin(i * length + increment) * amplitude);
                    
            }
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = cLineWidth;
            ctx.shadowBlur = shadowBlurWidth;
            ctx.shadowColor = shadowColor;
            ctx.stroke();  
            increment += frequency;
    }

    useEffect(() => {
        if(params != null) {
            canvasRef.current.width = params.width ;
            canvasRef.current.height = params.height;
        }
        if(ctx) {

            animate();
        }


    }, [params]);

    useEffect(() => {

        if(ctx) {
            console.log('new value');
            animate();
        }
    }, [waveY, frequency, length, amplitude, lineColor, canvasColor, cLineWidth,shadowColor, shadowBlurWidth]);

    
    const clearCanvas = () => {
        ctx.clearRect(0, 0, params.width, params.height);
    }

    return (
        <React.Fragment>
            {waveY} {frequency} {length}
            <canvas ref={canvasRef}></canvas>
            <button onClick={()=> clearCanvas()}>clear canvas</button>
        </React.Fragment>
        
    )
}

export default SinCanvas