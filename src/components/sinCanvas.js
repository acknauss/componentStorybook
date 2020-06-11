import React, { useState, useRef, useEffect } from 'react';
import { number } from '@storybook/addon-knobs';

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

    const waveY = number('Wave Y Cord', window.innerHeight/2 , options, 'group-wave');
    
    const frequency = number('Frequency', .01, optionsF, 'group-wave');
    const length = number('Length', .01, optionsL, 'group-wave');
    const amplitude = number('Amplitude', 100, optionsA, 'group-wave');
    

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
        
            ctx.clearRect(0, 0, params.width, params.height);
            ctx.beginPath();
            
            ctx.moveTo(0, params.height /2);
            
            for (let i = 0; i < params.width; i ++) {
                    ctx.lineTo(i ++, waveY + Math.sin(i * length + increment) * amplitude);
                    
            }
                
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
            console.log('new value')
            animate();
        }
    }, [waveY, frequency, length, amplitude]);

    


    return (
        <React.Fragment>
            {waveY} {frequency} {length}
            <canvas ref={canvasRef}></canvas>
        </React.Fragment>
        
    )
}

export default SinCanvas