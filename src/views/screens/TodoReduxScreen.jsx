import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoInputHandler
} from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todo Screen</h1>
        <input
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
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.haha,
    user: state.user
  };
};

// export default connect(mapStateToProps, { todoInputHandler })(TodoReduxScreen);

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  addTodo: addTodoInputHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
