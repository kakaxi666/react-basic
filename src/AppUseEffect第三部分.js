import { useState,useEffect } from "react";

function Son(){
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log('定时器进行中');
      
    },1000);
    return ()=>{
      clearInterval(timer);
    }
  })
  return <div>this is son </div>
}


function App() {
  const [show,setShow] = useState(true);
  return(
    <div>
      {show && <Son />}
      <button onClick={()=>setShow(false)}>卸载son组件</button>
    </div>
  )
}

export default App;