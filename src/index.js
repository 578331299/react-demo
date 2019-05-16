import React from 'react';
import ReactDOM from 'react-dom'; // 挂载在节点上 root
// 大写开头，都是组件 App组件
import TodoList from './TodoList';
import './style.css'

ReactDOM.render(<TodoList />, document.getElementById('root'));
