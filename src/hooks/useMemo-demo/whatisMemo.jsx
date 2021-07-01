import React, {useEffect, useMemo, useState} from 'react';

const Demo = () => {
  console.log('demo重新渲染了')
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClick = () => {
    setN(n => n + 1);
  };
  const childClick = useMemo(()=>{
    return ()=>{
      console.log(`child on click`);
    }
  },[m])
  return (
    <div>
      <p>n:{n}</p>
      <p>m:{m}</p>
      <Child m={m} onClick={childClick}/>
      <button onClick={onClick}>n+1</button>
    </div>
  );
};
const Child = React.memo((props) => {
    console.log('child重新渲染了');
    return (
      <div onClick={props.onClick}>
        {props.m}
      </div>
    );
  }
);

export default Demo;
