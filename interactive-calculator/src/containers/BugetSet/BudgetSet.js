import React from 'react';

export default ( { budget, split, setBudget, setSplit}) => {
  return (
    <div>
    <label htmlFor='budget'>Bugdet</label>
      <input 
        name='budget' 
        type='number'
        value={budget} 
        onChange={ (e) => setBudget(e.target.value) }
      />

      <label htmlFor='split'>Split into</label>
      <input 
        name="split"
        type="number"
        value={split}
        onChange={(e) => {
          setSplit(parseInt(e.target.value))
        }}
      />
      <span>Month(s)</span>
    </div>
  )
};