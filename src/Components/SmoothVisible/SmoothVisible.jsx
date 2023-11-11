import React, { useEffect } from 'react';
import $ from 'jquery';

const elementSmoothShow = (elementClass) => {
  let elements = $(`.${elementClass}`);
 
  $(window).on('scroll', () => {

      for(let index = 0; index < elements.length; index++)
      {        
        if(checkVisible(elements[index])){
          elements[index].style.opacity = 1;
        }
      }
    });
}

function checkVisible( elm, evalType ) {
  evalType = evalType || "visible";

  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top + 200,
      elementHeight = $(elm).height();

  if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (evalType === "above") return ((y < (vpH + st)));
}


const SmoothVisible = ({children, duration = 1 , ...props}) => {
    useEffect(() => {
        elementSmoothShow('elementSmoothShow');
    },[])
  return (
    <div className='elementSmoothShow' style={{transition: duration + 's', opacity:0}} {...props} >{children}</div>
  )
}

export default SmoothVisible