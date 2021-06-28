import React, {useState} from 'react';

export default  function Demo(){
  const nRef = React.useRef(0);
  const log =()=>setTimeout(()=>console.log(`n:${nRef.current}`),1000);
  const update = useState(null)[1]
  return (
    <div>
      <p>{nRef.current}这里并不能实时更新</p>
      <p>
        <button onClick={()=>{
          nRef.current +=1
          update(nRef.current)
        }}>+1</button>
        <button onClick={log}>log</button>
      </p>
    </div>
  )
}


