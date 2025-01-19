import {memo, useState} from 'react'

const MemoSon = memo(function Son(){
  console.log('我是子组件，我重新渲染了');
  return <div>我是子组件</div>
  
})

// function Son(){
//   console.log('我是子组件，我重新渲染了');
//   return <div>我是子组件</div>
  
// }

function App() {
  const [count,setCount] = useState(0);
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>+{count}</button>
      {/* <Son /> */}
      <MemoSon />
    </div>
  )
}

export default App;