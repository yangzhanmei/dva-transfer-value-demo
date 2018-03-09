import React from 'react';
import {connect} from 'dva';

import App from '../components/App';
import Add from '../components/Add';

const AppRoute = ({dispatch, list, value}) => {

  const handleProps = {
    value,
    onChange(e) {
      dispatch({type: 'app/change', payload: e.target.value})
    },
    onAdd() {
      dispatch({type: 'app/add', payload: {value}})
    },

  };

  return (
    <div>
      <h2>List</h2>
      <Add {...handleProps}/>
      <App list={list}/>
    </div>
  );
};

const mapStateToProps = ((state) => {

  return {list: state.app.list, value: state.app.value};
});

export default connect(mapStateToProps)(AppRoute);
