import {useSearchParams,useParams} from 'react-router-dom'

const Article = () => {
  // const [params]=useSearchParams();
  // const id = params.get('id');
  // const name = params.get('name');
  const {id,name} =useParams()
  return <div>我是文章页{id}{name}</div>
}

export default Article