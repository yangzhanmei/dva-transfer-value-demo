import queryString from 'query-string';
import {query} from '../services/app'

export default {
  namespace: 'app',
  state: {
    list: ['a', 'b', 'c'],
    value: ''
  },
  reducers: {
    save(state, {payload: {list}}) {

      return {...state, list}
    },
    change(state, {payload: value}) {

      return {...state, value}
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
  },
  effects: {
    * add({payload: {value}}, {call, put, select}) {
      const data = yield call(query, value);
      let tempList = yield select(state => state.app.list);
      let list = [];

      list = list.concat(tempList);
      list.push(value);
      yield put({type: 'change', payload: ''});
      yield put({type: 'save', payload: {list}})
    },
  }
};
