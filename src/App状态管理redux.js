import { useDispatch,useSelector } from "react-redux";
import {increment,decrement,addToNum} from './store/modules/counterStore'
import {fetchChannels} from './store/modules/channelStore'
import { useEffect } from "react";
function App() {
  const {count} = useSelector(state=>state.counter);
  const {channels} = useSelector(state=>state.channel);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChannels())
  },[dispatch])
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>add to 10</button>
      <button onClick={()=>dispatch(addToNum(20))}>add to 20</button>
      <ul>
        {channels.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;