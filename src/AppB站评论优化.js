import React from 'react';
// import { Button } from "antd";
import { useState,useRef,useEffect } from 'react';
import axios from 'axios';
import './App.scss'
import avatar from './image/bird.jpg'
import taiyang from './image/taiyang.jpg'
import orderBy from 'lodash/orderBy'
import classNames from 'classnames';
import {v4 as uuidV4} from 'uuid';
import dayjs from 'dayjs';
// import styled from './APP.module.css'
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

//封装请求数据
function useGetList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://localhost:3004/list')
      console.log(res.data);
      setList(res.data);
    }
    getList();
  },[])
  return {
    list,
    setList
  }
}

//封装item
function Item({ item,onDelete }) {
  return (
    <div  className="reply-item">
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          src={item.user.avatar}
          alt=""
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          {user.uid === item.user.uid && (
            <span
              className="delete-btn"
              onClick={() => onDelete(item.rpid)}
            >
              删除
            </span>
          )}
        </div>
      </div>
    </div>
    </div>
  )
  
}

function App() {
  const [type, setType]=useState('hot');
  const {list,setList}=useGetList();
  const inputRef = useRef(null);

  // 删除评论
  const onDelete = rpid => {
    // 如果要删除数组中的元素，需要调用 filter 方法，并且一定要调用 setList 才能更新状态
    setList(list.filter(item => item.rpid !== rpid))
  }
  const ontoggle=(type) =>{
    setType(type);
    let newList;
    if(type === 'time'){
      newList = orderBy(list, ['ctime'], ['desc'])
    }else{
      newList = orderBy(list, ['like'], ['desc'])
    }
    setList(newList);
  }

  const [content,setContent] = useState(''); //发表评论
  const handlePublish = () => {
    const newList = [
      {
        rpid: uuidV4(),
        user: {
          uid: '30009257',
          avatar,
          uname: '黑马前端',
        },
        content:content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 0,
      }, 
      ...list,
    ]
    setList(newList);
    setContent('');
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <div className='reply-navigation'>
        <ul className='nav-bar'>
          <li className='nav-tittle'>
            <span className='nav-tittle-text'>评论</span>
            <span className='total-reply'>{list.length}</span>
          </li>
          <li className='nav-sort'>
            {
              tabs.map((item) => {
                return(
                  <div 
                    key={item.type} 
                    // className={type === item.type ? 'nav-item active' : 'nav-item'}
                    className={classNames('nav-item', {active: type === item.type})}
                    onClick={()=>ontoggle(item.type)}
                  >
                    {item.text}
                  </div>
                )
              })
            }
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              ref={inputRef}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
      </div>
      <div className='reply-list'>
        {/* 评论项 */}
        {list.map(item => <Item key={item.rpid} onDelete={onDelete} item={item} />)}
      </div>
    </div>
  );
}


export default App;