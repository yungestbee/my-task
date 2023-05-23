import React, { useState } from 'react';
import './TodoList.css'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setTodoItems([...todoItems, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };

  return (
    <div className="container">
      <div className='form'>

      <h2>Todo List</h2>
        <input id='input' type="text" value={inputValue} onChange={handleInputChange} />
        <button id='btn1' onClick={handleAddItem}>Add</button>
      
      <ul className='order'>
        {todoItems.map((item, index) => (
          <li className="list" key={index}>
            {item}
            <button id= 'btn' onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
      </div>
    </div>
  );
};

export default TodoList;