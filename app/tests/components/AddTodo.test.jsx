  var expect = require('expect');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var $ = require('jQuery');

  var AddTodo = require('AddTodo');


  describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if valid text entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = 'this is a todo';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith('this is a todo');
    });

    it('should not call onAddTodo if invalid text entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
