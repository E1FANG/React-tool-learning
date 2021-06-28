import React, {useReducer} from 'react';

const initial = {
  n:0,
  name:'H'
}

const reducer = (state,action)=>{
  if (action.type==='add'){
    return {
      ...state,
      n:state.n+action.number
    }
  }else if(action.type === 'multi'){
    return {
      ...state,
      n:state.n*2
    }
  }else{
    throw Error('unknow type')
  }
}

export default function Demo(){
  const [state,dispatch] =useReducer(reducer,initial)
  const add =(number)=>{
    dispatch({type:'add',number})
  }
  return(
    <div>
      <h1>n:{state.n}</h1>
      <button onClick={()=>add(1)}>+1</button>
      <button onClick={()=>add(2)}>+2</button>
    </div>
  )
}
