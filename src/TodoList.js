import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

// 定义组件
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    // const list = [...this.state.list];
    // list.push(this.state.inputValue);
    this.setState({
      // list: list,// 展开运算符
      list:[...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleDelete(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list //key 和value一样
    })
  }

  handleAlert(data)　{
    alert(data);
  }

  getTodoItem() {
    return (
      this.state.list.map((item,index) => {
        {/*return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>*/}
        return (
          <TodoItem 
            key={index} 
            content={item} index={index} 
            delete={this.handleDelete.bind(this)}
            alert={this.handleAlert.bind(this)}/>
        )
      })
    )
  }
  // this.props.content父组件向子组件传值
  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleChange}/>
        {/*this指向*/}
        <button className='red-button' onClick={this.handleClick.bind(this)}>add</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;
