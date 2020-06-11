import React, { useState, useRef, useEffect } from 'react';
import './_canvasEffects.scss';



const CanvasWork = () => {

    let canvasRef = useRef();
    const [ctx, setCtx] = useState();
    const [params, setParams] = useState({});
    const [arrayIndex, setArrayIndex] = useState(1);
    const requestRef = React.useRef();
    

    useEffect(() => {
        if(canvasRef != null) {
            const canvas = canvasRef.current;
            setParams({width:window.innerWidth, height: window.innerHeight})
            setCtx(canvas.getContext('2d'));
        }


    }, []);

    useEffect(() => {
        if(params != null) {
            canvasRef.current.width = params.width ;
            canvasRef.current.height = params.height;
        }
        if(ctx) {
            ctx.beginPath();
        }


    }, [params]);




    const pointsArray = {
            1: {x1:5.5, y1:99.5, x2:83, y2:-16.5, x:170.5, y:71},
            // 2: {x1: 25.0528259, y1:75.3511402, x2: 28.5063644, y2:71.972998, x: 32.3015432, y:68.5931802},
            // 3: {x1:34.6211834, y1:66.5274116, x2: 37.0684515, y2:64.461017, x: 39.635382, y:62.4317004},
            // 4: {x1:41.8887069, y1:60.6503084, x2:44.2342415, y2:58.897488, x:46.6665977, y:57.1987437},
            
            2: {x1:230.244636, y1:130.744636, x2:311, y2:193, x:369, y:131},
            3: {x1:457.272867, y1:36.6393485, x2:586, y2:131, x:603.5, y:42.5},
            4: {x1:625.507388, y1: -68.7945055, x2: 777.797352, y2: 99.3222314, x:778.035156, y:99.5 }
    }

    const drawTheCurve = () => {
        
        ctx.strokeStyle = 'blue';
        let lineArray = [];
        
        Object.entries(pointsArray[arrayIndex]).map((e, v) => {
            lineArray.push(e[1]);
        })
        ctx.bezierCurveTo(lineArray[0], lineArray[1], lineArray[2], lineArray[3], lineArray[4], lineArray[5]);
        
        ctx.stroke();
        
        
    }

    const animate = () => {
        
        setArrayIndex(arrayIndex => (arrayIndex + 1));
      
        drawTheCurve();
        
      }
      

    
    const newLines = () => {

        animate();

     }

     useEffect(() => {
        setTimeout(function(){ 
            if(arrayIndex <= Object.values(pointsArray).length) {
                requestAnimationFrame(animate);
                
                console.log(pointsArray[arrayIndex])
            } else {
                console.log('stop')
                cancelAnimationFrame(animate);
            }
        }
            , 250);
        
     }, [arrayIndex])


   

    return(
        <div>
            <canvas ref={canvasRef}></canvas>
            {arrayIndex}
            <button onClick={()=> newLines()}>new</button>
        </div>
    )
}

export default CanvasWork