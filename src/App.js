import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
  
function App() {

  const [jokes, setJokes] = useState([])
  const [query, setQuery] = useState('categories')

  useEffect(() => {
    getCategories();
  })

  const getCategories = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/search?query=${query}')
    setJokes(response.data.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    getCategories();
  }


  return (
    <div className="container">
      <h1 className="title">Chuck Norris Jokes</h1>
      <hr></hr>

      <h6 className="categories">Categories</h6>
      <button className="btn btn-link btn-md">Food</button>
      <button className="btn btn-link btn-md">All Jokes</button>

      <hr></hr>

      <div className="card">
        <div className="card-header"> Joke </div>

          <div className = "card-body"> <p>Joke No. 1</p>
          <footer class="blockquote-footer">Created on <cite title="date"> date  </cite></footer> </div>

  
      </div>
    </div>
    
      );
}
export default App;