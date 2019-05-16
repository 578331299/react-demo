import React from 'react';

class TodoItem extends React.Component {
	// 子组件如果想和父组件通信，子组件需要调用父组件传递过来的方法
	handleClick() {
		this.props.delete(this.props.index)
		this.props.alert(this.props.content);
	}
	render() {
		const {content} = this.props;
		return (
			<div onClick={this.handleClick.bind(this)}>{content}</div>
		)
	}
}

export default TodoItem;