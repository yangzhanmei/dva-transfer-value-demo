import React from 'react';

const Add = ({onAdd, onChange, value}) => {

  console.log(value);
  return (
    <div>
      <input value={value} onChange={onChange}/>
      <button onClick={onAdd}>+</button>
    </div>
  )
};

export default Add;
