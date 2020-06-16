import React, { useState, useRef, useEffect } from 'react';
import { number, color } from '@storybook/addon-knobs';

import './_svg.scss';

function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }


const TwirlFinal = () => {
    let canvasRef = useRef();
    const [ctx, setCtx] = useState();
    const params = useWindowSize();
    const [waveValues, setWaveValues] = useState({strokeLength: 4, waveYStart: window.innerHeight/2, strokeColor: '#EBF5EE', waveFrequency: .009, waveLength: .01, waveAmplitude: 100});
    

    const canvasColor = color('background color', 'rgba(0,0,0,0.001)', 'group-style');



    
    

    useEffect(() => {
        if(canvasRef != null) {
            const canvas = canvasRef.current;
            setCtx(canvas.getContext('2d'));
        }


    }, []);
    let increment = waveValues.waveFrequency;
    
    const animate= () => {
            requestAnimationFrame(animate);
            ctx.fillRect(0, 0, params.width, params.height);
            ctx.beginPath();
            
            ctx.moveTo(0, params.height /2);
            
            for (let i = 0; i < params.width; i ++) {
                    ctx.lineTo(i ++, waveValues.waveYStart + Math.sin(i * waveValues.waveLength + increment) * waveValues.waveAmplitude);
                    
                    
            }
            ctx.strokeStyle = waveValues.strokeColor;
            ctx.lineWidth = waveValues.strokeLength;
            ctx.shadowBlur = 1;
            ctx.shadowColor = 'rgba(0,0,0,.01)';
            ctx.fillStyle = canvasColor;

            
            ctx.stroke();  
            increment += waveValues.waveFrequency ;
            
    }

    useEffect(() => {
        if(params != null) {
            
            canvasRef.current.width = params.width ;
            canvasRef.current.height = params.height;
            if(ctx) {
                ctx.fillStyle = canvasColor;
                animate();
            }
        }
       


    }, [params]);

    useEffect(() => {
        if(ctx) {
            ctx.fillStyle = canvasColor;
            animate();
            
            setTimeout(function(){ setWaveValues(waveValues.waveYStart = 0); }, 1000);
            setTimeout(function(){ setWaveValues(waveValues.waveLength = 0.01); setWaveValues(waveValues.strokeLength = 1); }, 3000);
            setTimeout(function(){ setWaveValues(waveValues.strokeLength = 2) }, 5000);
            setTimeout(function(){ setWaveValues(waveValues.waveFrequency = .019);  }, 2500);
            
           
            
            
        }
    }, [ctx, waveValues]);

    
    const clearCanvas = () => {
        ctx.clearRect(0, 0, params.width, params.height);
    }

    return (
        <div className="canvas">
            {params.width}px / {params.height}px
            <canvas ref={canvasRef}></canvas>
            <button onClick={()=> clearCanvas()}>clear canvas</button>
        </div>
        
    )
}

export default TwirlFinal