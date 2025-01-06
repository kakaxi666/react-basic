import { useState } from "react";
import { useRef } from "react";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const showDom = () => {
      console.dir(inputRef.current);
  }
  return (
    <div className="App">
      <h1>hello react</h1>
      <div>
        <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={showDom}>获取dom</button>
      </div>
      
    </div>
  );
}

export default App;