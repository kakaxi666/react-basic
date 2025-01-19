import { useRef, forwardRef,useImperativeHandle} from "react";


// //子组件
// function Son() {
//   return <input type="text"></input>
// }

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  }
  //聚焦方法暴露出去
  useImperativeHandle(ref, () => {
    return {
      focusHandler
    }
  })
  return <input type="text" ref={inputRef}></input>
})

//父组件
function App() {
  const sonRef = useRef(null);
  const focusHandler = () =>{
    console.log(sonRef.current.focusHandler());
    
  }
  return (
    <>
      <Son ref={sonRef}></Son>
      <button onClick={focusHandler}>获取子组件的ref</button>
    </>
  )
}

export default App;