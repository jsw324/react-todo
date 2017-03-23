  const expect = require('expect');
  const actions = require('actions');

  describe('Actions', () => {
    it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };
      var res = actions.setSearchText('Some search text');

      expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'thing to do'
      };
      var res = actions.addTodo(action.text);

      expect(res).toEqual(action);
    });

    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = actions.toggleShowCompleted();
      expect(res).toEqual(action);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };
      var res = actions.toggleTodo(11);
      expect(res).toEqual(action);
    });
  });
