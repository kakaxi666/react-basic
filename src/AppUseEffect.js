import { useEffect,useState } from "react"
const URL = "http://geek.itheima.net/v1_0/channels"

function App(){
  const [list,setList] = useState([])
  useEffect(()=>{
    // fetch(URL).then(res=>res.json()).then(res=>console.log(res))
    async function getChannel(){
      const res = await fetch(URL)
      const data = await res.json()
      setList(data.data.channels)
    }
    getChannel()
  })
  return (
    <div>
      this is APP
      <ul>
        {list .map(items =>{
          return <li key={items.id}>{items.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App