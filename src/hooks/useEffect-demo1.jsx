import React, {useEffect, useState} from 'react';

const Demo = ()=>{
  const [n,setN] = useState(0)
  const onClick = ()=>{
    setN(n+1)
  }
  useEffect(()=>{
    console.log("只在第一次渲染的时候执行");
  },[])   // 数组里面的变量变化时执行  => 空数组，在第一次执行
  useEffect(()=>{
    if(n !== 0){   //让函数不在第一次渲染时执行
      console.log('n改变了');
    }
  },[n])
  useEffect(()=>{
      console.log('任何一个state变化时，都会执行');
  })
  return(
    <div>
      n:{n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default Demo
