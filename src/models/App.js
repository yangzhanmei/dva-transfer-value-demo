import queryString from 'query-string';

export default {
  namespace: 'app',
  state: {list: ['a', 'b', 'c']},
  reducers: {
    save(state, {payload: {list}}) {
      return {...state, list}
    }
  },
  subscriptions: {
    setup({dispatch, history}) {

      return history.listen(({pathname, search}) => {
        const query = queryString.parse(search);
        let list = [];

        if (pathname === 'app') {
          dispatch({type: 'save', payload: {list}})
        }
      })
    }
  }
};
