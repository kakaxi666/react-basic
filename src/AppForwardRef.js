import { useRef, forwardRef} from "react";


// //子组件
// function Son() {
//   return <input type="text"></input>
// }

const Son = forwardRef((props, ref) => {
  return <input type="text" ref={ref}></input>
})

//父组件
function App() {
  const sonRef = useRef(null);
  const showRef = () =>{
    console.log(sonRef);
    sonRef.current.focus();
  }
  return (
    <>
      <Son ref={sonRef}></Son>
      <button onClick={showRef}>获取子组件的ref</button>
    </>
  )
}

export default App;