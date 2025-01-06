import { useState } from "react";
import className from 'classnames';

const buttonClass = className('')

const list = [
  {id:"1", name: "a"},
  {id:"2", name: "b"},
  {id:"3", name: "c"},
]

const isLogin = false; 
const articleType = 10;
function getArticleType() {
  if (articleType === 0) {
    return "news"
  } else if (articleType === 1) {
    return "sports"
  } else {
    return "unknown"
  }
}
function Button(){
  return <button>click me !</button>
}
function App() {
  const handleClick = (e) => {
    console.log('click',e.target)
  }
  const handleClick1 = () => {
    setCount(count + 1)
  }
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      this is app
      {'hahaha'}
      {new Date().getDate()}
      <div style={{color: 'red', fontSize: '20px'}}>this is div</div>
      <div>
        <ul>
          {
            list.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
      <div>
        {isLogin && <h1>hello</h1>}
        {isLogin ? <h1>hello</h1> : <h1>bye</h1>}
      </div>
      {/* <div>
        {getArticleType()}
        <button onClick={handleClick}>click me</button>
      </div> */}
      {/* {<Button />} */}
      {<button onClick={handleClick1}>{count}</button>}
    </div>
  );
}

export default App;
