import React, {useRef} from 'react';
import {useDimensions} from '../hooks/useDimensions';

const Bax = ({baxSize=50})=>{
  const ref = useRef(null)
  const {width, height} = useDimensions(ref)

  const baxWidth = parseInt(width/baxSize);
  const baxHPad = parseInt((width%baxSize)/2);
  const baxHeight = parseInt(height/baxSize);
  const baxVPad = parseInt((height%baxSize)/2);

  console.log("Bax Loaded");
  console.log(baxSize);
  const baxes = [];
  for(let yix=0; yix<baxHeight; yix++){
    for(let xix=0; xix<baxWidth; xix++){
      baxes.push(<div key={`bax_${xix}_${yix}`} style={{position: "absolute", top:`${yix*50+baxVPad}px`, left:`${xix*50+baxHPad}px`, width:baxSize-3, height:baxSize-3, border: "1px solid #CCDDBB", backgroundColor:"#DDEECC"}}className={`bax row_${yix} col_${xix}`} />);
    }
  }

  return (<div ref={ref} style={{position:"absolute", zIndex:0, height: "100%", width: "100%", backgroundColor:"pink"}}>
    { baxes }
  </div>);
}

export default Bax;