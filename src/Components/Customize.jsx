import React, { useState } from 'react';

const DynamicForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dynamic Form</h2>

      <form>
        {/* Text Input Fields */}
        <div>
          <label>Name: </label>
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" required />
        </div>

        {/* Radio Buttons */}
        <div>
          <label>Select Option: </label>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          /> Option 1
          <input
            type="radio"
            name="option"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          /> Option 2
        </div>

        {/* Conditional Fields */}
        {selectedOption === 'option1' && (
          <div>
            <label>Additional Field for Option 1: </label>
            <input type="text" name="option1Field" />
          </div>
        )}

        {selectedOption === 'option2' && (
          <div>
            <label>Additional Field for Option 2: </label>
            <input type="number" name="option2Field" />
          </div>
        )}

        <div style={{ marginTop: '10px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
