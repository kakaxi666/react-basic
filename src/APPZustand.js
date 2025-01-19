import {create} from 'zustand'

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}))

function App(){
  const{count,increment,decrement} = useStore()
  return(
    <>
      this is App
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App