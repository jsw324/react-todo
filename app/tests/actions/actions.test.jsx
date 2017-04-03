  import configureMockStore from 'redux-mock-store';
  import thunk from 'redux-thunk';
  const expect = require('expect');

  const actions = require('actions');

  const createMockStore = configureMockStore([thunk]);

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
        todo: {
          id: 'abc123',
          text: 'anyhing we like',
          completed: false,
          createdAt: 949
        }
      };
      var res = actions.addTodo(action.todo);

      expect(res).toEqual(action);
    });

    it('should create todo and dispatch addTodo', (done) => {
      const store = createMockStore({});
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

    it('should generate add todos action object', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };
      var res = actions.addTodos(todos);

      expect(res).toEqual(action);
    });

    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = actions.toggleShowCompleted();
      expect(1).toEqual(1);
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
