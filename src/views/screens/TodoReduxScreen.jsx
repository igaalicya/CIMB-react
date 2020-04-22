import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoInputHandler,
  loginHandler
} from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todo Screen</h1>
        {/* <input
          type="text"
          className="form-control"
          placeholder="Input Todo Item"
          onChange={e => this.props.onChangeTodo(e.target.value)}
        />
        <input
          className="btn btn-primary"
          type="button"
          value="Add Todo"
          onClick={e => this.props.addTodo(this.props.todo.todoInput)}
        />
        {this.props.todo.todoList.map(val => {
          return <p>{val}</p>;
        })} */}
        <p>Testing 1: {this.props.user.testing}</p>
        <p>Testing 2: {this.props.user.testing2}</p>
        <input
          type="button"
          value="Testing"
          className="btn btn-primary"
          onClick={this.props.onLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    user: state.user
  };
};

// export default connect(mapStateToProps, { todoInputHandler })(TodoReduxScreen);

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  addTodo: addTodoInputHandler,
  onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
