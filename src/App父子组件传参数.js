function Son(props){
    // return <div>我是子组件{props.name}{props.child}</div>
    console.log(props);
    return <div>我是子组件{props.children}</div>
}

function App() {
//   const name = '张三'
  return (
    <div>
        {/* <Son 
            name={name}
            age={18}
            isTrues={true}
            list={[1,2,3]}
            obj={{name:'李四'}}
            cb={()=>console.log('回调函数')}
            child={<span>this is span</span>}
        /> */}
        <Son>
            <span>this is span</span>
        </Son>
    </div>
  )
    
}

export default App;