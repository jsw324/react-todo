const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
            id: 1,
            text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Get food'
        }, {
          id: 4,
          text: 'Go to the bank'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;


    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
