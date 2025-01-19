import {memo,useCallback,useState} from 'react';
const Input = memo(function Input({onChange}){
  console.log('子组件被渲染');
  return <input type='text' onChange={(e)=>{onChange(e.target.value)}} ></input>
  
})

function App() {
  const changeHandler = useCallback((value) => console.log(value),[]);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Input onChange={changeHandler} />
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default App;