import './requestNew.css';
import { useState, useEffec} from 'react';

const RequestNew = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [selector, setSelector] = useState(null);

  //temp
  const [response, setResponse] = useState('');

  const updateValue = (event, setter ) => {
    setter(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: selector, 
        title: title,
        year:  year,

      })
  };
  fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="requestContainer">
      <h2>Request a new title</h2>
        <div className="dropdown">Movie or Show?</div>
            <select name='selector' id='selector' onChange={(event) => setSelector(event.target.value)}>
              <option value="-"></option>
              <option value="Movie">Movie</option>
              <option value="Show">Show</option>
            </select> <br/>
        {selector && 
          <form>
            <input type="text" value={title} title='Enter title' placeholder='Enter title' onChange={(event) => updateValue(event, setTitle)} /> <br/>
            <input type='text' value={year} title='Enter year, helpful if there is more than one version.' placeholder= 'Enter year (optional)' onChange={(event) => updateValue(event, setYear)}></input> <br/>
            <button onClick={event => submitForm(event)}>Submit Request</button>
          </form>
        }
    </div>
  )
};

export default RequestNew;