import { useState } from "react";

function A({onGetName}){
  const name = 'this is a name';
  return <div>我是A<button onClick={()=>onGetName(name)}>send</button></div>
}


function B({name}){
  return <div>我是B{name}</div>
}

function App() {
  const [name, setName] = useState('');
  const getName = (name) => {
    console.log(name);
    setName(name);
  }
  return (
    <div>
      <div>我是App</div>
      <A onGetName={getName}/>
      <B name={name}/>
    </div>
  )
}
export default App;