'use client'
import React, {useRef} from 'react';
import {useDimensions} from '../hooks/useDimensions';

const Bax = ({baxSize=24})=>{
  const ref = useRef(null)
  const {width, height} = useDimensions(ref)

  const baxWidth = parseInt(width/baxSize);
  const baxHPad = parseInt((width%baxSize)/2);
  const baxHeight = parseInt(height/baxSize);
  const baxVPad = parseInt((height%baxSize)/2);

  const baxes = [];
  for(let yix=0; yix<baxHeight; yix++){
    for(let xix=0; xix<baxWidth; xix++){
      baxes.push(<div key={`bax_${xix}_${yix}`} style={{position: "absolute", top:`${yix*baxSize+baxVPad}px`, left:`${xix*baxSize+baxHPad}px`, width:baxSize-3, height:baxSize-3, borderWidth: "1px", borderColor:"rgba(60, 120, 40, 0.5)", backgroundColor:"rgba(40, 80, 20, 0.5)"}}className={`bax row_${yix} col_${xix}`} />);
    }
  }

  return (<div ref={ref} style={{position:"absolute", zIndex:-1, height: "100%", width: "100%"}}>
    { baxes }
  </div>);
}

export default Bax;