  const React = require('react');

  var Todo = React.createClass({
    //var {text} = this.props;

    render: function () {
      var {id, text} = this.props;
      return (
        <div>
          {id}. {text}
        </div>
      )
    }
  });

  module.exports = Todo;
