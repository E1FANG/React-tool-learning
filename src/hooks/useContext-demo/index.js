import React, { useState} from 'react';
import './style.css'
const themeContext = React.createContext(null)

export default function useContextDemo(){
  const [theme,setTheme] = useState('red')
  return (
   <themeContext.Provider value={{theme,setTheme}}>
      <div className={`App${theme}`}>
        {theme}
        <ChildA/>
        <ChildB/>
      </div>
   </themeContext.Provider>
  )
}

const ChildA = ()=>{
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={()=>setTheme('red')}>red</button>
    </div>
  )
}

const ChildB = ()=>{
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={()=>setTheme('blue')}>blue</button>
    </div>
  )
}
