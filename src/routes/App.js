import React from 'react';
import {connect} from 'dva';

import App from '../components/App';

const AppRoute = ({list}) => {

  return (
    <div>
      <h2>List</h2>
      <App list={list}/>
    </div>
  );
};

const mapStateToProps = (state) => {

  return {list: state.app.list};
};

export default connect(mapStateToProps)(AppRoute);
