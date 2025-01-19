import { Component,useState } from "react";

class Son extends Component {
  componentDidMount(){
    console.log('子组件挂载完成')
    this.timer = setInterval(() => {
      console.log('定时器运行中');
    }, 1000);
  }


  //组件卸载的时候
  componentWillUnmount(){
    console.log('子组件卸载完成')
    clearInterval(this.timer)
  }
  render(){
    return <div>子组件</div>
  }
}


function App(){
  const [show,setShow] = useState(true)
  return (
    <>
      {show && <Son />}
      <button onClick={()=>setShow(!show)}>unmount</button>
    </>
  )
}

export default App