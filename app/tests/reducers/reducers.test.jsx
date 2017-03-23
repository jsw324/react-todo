  const expect = require('expect');
  const df = require('deep-freeze-strict');

  const reducers = require('reducers');

  describe('Reducers', () => {
    describe('searchText Reducer', () => {
      it('should set searchText', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'dog'
        };
        var res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toEqual(action.searchText);
      });
    });

    describe('Show Completed Toggle', () => {
      it('should toggle show completed', () => {
          var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
          }
          var res = reducers.showCompletedReducer(df(true), df(action));

          expect(res).toEqual(false);
      });
    });
  });
