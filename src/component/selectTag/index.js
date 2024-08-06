import React from 'react';
import { categoryOption } from '../../constants/category';
import './styles.css';

const Select = (props) => {
  return (
    <div className='select-tag' >
      <select value={props.category} onChange={props.handleCategory}>
        {categoryOption.map((option, i) => (
          <option key={i} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
