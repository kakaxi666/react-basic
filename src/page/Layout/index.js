import { Link,Outlet } from "react-router-dom"

const layout = () => {
  return (
    <div>
      <h1>layout一级路由</h1>
      <Link to="/board">面板</Link>
      <Link to="/">关于</Link>
      <Outlet />
    </div>
  )
}

export default layout