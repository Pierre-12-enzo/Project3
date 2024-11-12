import React, { useState } from 'react';

const OnSubmit = () => {
  const [value, setValue] = useState('');
  const [last, setLast] = useState('');
  const [nicky, setNicky] = useState('');
  const [result, setResult] = useState(null); // Store the form result after submission

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      value,
      last,
      nicky,
    };
    setResult(data); // Store the data in result state for display
  }

  // Input change handlers
  function handleChange1(e) {
    setValue(e.target.value);
  }
  function handleChange2(e) {
    setLast(e.target.value);
  }
  function handleChange3(e) {
    setNicky(e.target.value);
  }

  return (
    <>
      <div className="text-center container p-3">
        <h1 className="text-success">Geeks for Geeks</h1>
        <h3 className="text-dark">Example for React onSubmit Event</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter First Name</label>
            <input 
              type="text" 
              value={value} 
              onChange={handleChange1} 
              required 
            />

            <label>Enter Last Name</label>
            <input 
              type="text" 
              value={last} 
              onChange={handleChange2} 
              required 
            />

            <label>Enter Nickname</label>
            <input 
              type="text" 
              value={nicky} 
              onChange={handleChange3} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>

        {/* Display the result if available */}
        {result && (
          <div className="p-3">
            <p className="h4">
              First Name: <span className="text-sm-success">{result.value}</span>
            </p>
            <p className="h4">
              Last Name: <span className="text-sm-success">{result.last}</span>
            </p>
            <p className="h4">
              Nickname: <span className="text-sm-success">{result.nicky}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default OnSubmit;
