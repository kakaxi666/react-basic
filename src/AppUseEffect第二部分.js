import { useEffect,useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("useEffect");
  // });
  // useEffect(() => {
  //   console.log("useEffect");
  // },[]);
  useEffect(() => {
    console.log("useEffect");
  },[count]);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
}

export default App;