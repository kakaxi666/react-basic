import { useMemo, useState } from "react";

function fib(n){
  console.log('计算函数执行了');
  
  if(n<=3) return 1;
  return fib(n-1)+fib(n-2);
}

function App(){
  const [count1, setCount1] = useState(0);
  // const result = fib(count1);
  const result = useMemo(()=>{
    fib(count1);
  },[count1])
  const [count2, setCount2] = useState(0);
  console.log('组件重新渲染好了');
  
  return(
        <div>
            <h1>App</h1>
            <button onClick={() => setCount1(count1+1)}>count1: {count1}</button>
            <button onClick={() => setCount2(count2+1)}>count2: {count2}</button>
        </div>
    )
}
export default App;