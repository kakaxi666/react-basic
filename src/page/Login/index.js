import {Link,useNavigate} from "react-router-dom"


const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      我是登陆页
      <Link to="/article">跳转到文章页</Link>
      <button onClick={() => navigate("/article")}>跳转文章页的第二种方法</button>
      <button onClick={() => navigate("/article?id=1001&name=张三")}>传参</button>
      <button onClick={() => navigate("/article/1001/张三")}>传参2</button>
    </div>)
}

export default Login 