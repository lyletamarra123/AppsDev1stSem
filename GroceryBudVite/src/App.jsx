import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// 9. Make sure the basket items are saved via browser's local storage so closing the page 
// and running it again should still have the items visible and not start from scratch
const getLocalStorage = () => { 
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 3. If user entered an empty item and presses Submit or hit enter on the text input, 
    // an error alert message must be shown to let the user know that an input is required
    if (!name) {
      showAlert(true, 'danger', 'Please enter an Item'); 
    } 
    // 6. As soon as the user made some updates and clicks Edit, the basket item must be appropriately updated as well
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Item value changed');
    } 
    // 2. Once user submitted a new item, it should add it to the basket list and set the textfield text to empty. 
    // An alert message to confirm that the right item is added to the basket must be shown
    else { 
      showAlert(true, 'success', 'Item added to the list');  
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]); 
      setName('');
    } 
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'List cleared');
    setList([]);
  };

  // 7. Clicking the delete button should remove the item from the basket 
  // and an alert message confirming the right item was removed should be visible
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed');
    setList(list.filter((item) => item.id !== id));
  };

  //5. Clicking the edit button should automatically set the item text into the textfield 
  //so it's easier to confirm it's the right item to edit.
  const editItem = (id) => {       
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>GROCERY BUD</h3>  
        <div className='form-control'> 
        {/* 1. A text input must be provided to add new grocery item / update a grocery item into the basket */}       
          <input
            type='text'
            className='grocery'
            placeholder='e.g Apple'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'> 
            {isEditing ? 'edit' : 'submit'} 
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          {/* 8. A Clear Items button must be visible at the end of the list and clicking it should empty the basket */}
          <button className='clear-btn' onClick={clearList}> 
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;