'use client'
import React, {useRef} from 'react';
import {useDimensions} from '../hooks/useDimensions';
import Image from "next/image";

const Bax = ({baxSize=20, baxColor="rgb(170, 220, 120)",bgSrc=""})=>{
  baxSize = (baxSize >=20 ) ? baxSize : 20;
  const ref = useRef(null)
  const {width, height} = useDimensions(ref)

  const baxWidth = parseInt(width/baxSize);
  const baxHPad = parseInt((width%baxSize)/2);
  const baxHeight = parseInt(height/baxSize);
  const baxVPad = parseInt((height%baxSize)/2);

  const baxColorAlpha = baxColor.replace(/\)/,",0.5)");

  console.log("Max Bax", baxWidth*baxHeight);

  const baxes = [];
  for(let yix=0; yix<baxHeight; yix++){
    for(let xix=0; xix<baxWidth; xix++){
      baxes.push(<div key={`bax_${xix}_${yix}`} style={{position: "absolute", top:`${yix*baxSize+baxVPad}px`, left:`${xix*baxSize+baxHPad}px`, width:baxSize-3, height:baxSize-3, borderWidth: "1px", borderColor:baxColor, backgroundColor:baxColorAlpha}} className={`bax row_${yix} col_${xix}`} />);
    }
  }

  return (<div ref={ref} style={{position:"fixed", zIndex:-1, height: "100%", width: "100%"}}>
    { bgSrc != "" && (<Image
      src={bgSrc} 
      alt="background image"
      fill
      style={{objectFit:'cover'}}
    />)}
    { baxes }
  </div>);
}

export default Bax;