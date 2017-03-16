  const React = require('react');

  var Todo = React.createClass({
    //var {text} = this.props;

    render: function () {
      var {id, text, completed} = this.props;
      return (
        <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked={completed}/>
          {text}
        </div>
      )
    }
  });

  module.exports = Todo;
