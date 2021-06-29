import React, { useLayoutEffect} from 'react';

const Demo = ()=>{
  useLayoutEffect(()=>{
    document.querySelector('#target').innerHTML='value:1000'
  })
  return (
    <div id="target">0</div>
  )
}

export default Demo
