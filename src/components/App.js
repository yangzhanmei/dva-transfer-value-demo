import React from 'react';

const App = ({list}) => {
  const listDisplay = list.map((val, index) => {

    return (
      <div key={index}>
        {val}
      </div>
    )
  });

  return (
    <div>
      {listDisplay}
    </div>
  )
};

export default App;
