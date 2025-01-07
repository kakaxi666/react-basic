
import { useState } from "react";

function Son({getMsg}){
    const sonMsg = 'this is son msg'
    return (
        <div>
            <button onClick={() => {getMsg(sonMsg)}}>点击</button>
        </div>
    )
};

function App() {
    const[msg,setMsg] = useState('');
    const getMsg = (msg) => {
        console.log(msg)
        setMsg(msg)
    }
    return (
        <div>
            this is app,{msg}
            <Son getMsg={getMsg}/>
        </div>
    )
}

export default App;