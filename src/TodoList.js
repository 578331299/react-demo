import React from 'react';

// 定义组件
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],// 展开运算符
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
        {/*this指向*/}
        <button onClick={this.handleClick.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default TodoList;
