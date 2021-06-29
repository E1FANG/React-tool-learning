import React, {useEffect, useState} from 'react';

const Demo =()=>{
  const [n,setN] = useState(0)
  useEffect(()=>{
    const clockID = setInterval(()=>{
      console.log(`hi`)
    },1000);
    return ()=>{
      console.log(`清楚定时器副作用`);
      window.clearInterval(clockID)
    }
  })
  useEffect(()=>{
    console.log(1);
  },[])
  useEffect(()=>{
    console.log(2);
  },[])
  return(
    <div>{n}</div>
  )
}

export default Demo
