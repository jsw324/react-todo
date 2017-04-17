  import React from 'react';
  const {connect} = require('react-redux');
  const actions = require('actions');
  const moment = require('moment');

  export class Todo extends React.Component {
    render () {
      var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
      var todoClassName = completed ? 'todo todo-completed' : 'todo';
      var renderDate = () => {
          var message = 'Created: ';
          var timestamp = createdAt;

          if (completed) {
            message = 'Completed: ';
            timestamp = completedAt;
          }

          return message + ' ' + moment.unix(timestamp).format('MMM Do YYYY @ h:mma')
      };

      return (
        <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
      )
    }
  };

  export default connect()(Todo);
