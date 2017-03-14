const React = require('react');

const TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;


    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;