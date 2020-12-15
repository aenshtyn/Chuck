import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState({
    joke: '', date: '', category: '',
  })

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    console.log(result.data.updated_at);
    setState({
      ...state,
      joke: result.data.value,
      date: result.data.updated_at,
      category: result.data.categories
    });
  }

  // const getCategories = async () => {
  //   const response = await axios.get('https://api.chucknorris.io/jokes/search?query=${query}')
  //   setJokes(response.data.value)
  // }

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   getCategories();
  // }


  return (
    <div className="container">
      <h1 className="title">Chuck Norris Jokes</h1>
      <hr></hr>

      <h6 className="categories">Categories</h6>
      <button className="btn btn-link btn-md">{state.category}</button>
      <button className="btn btn-link btn-md">All Jokes</button>

      <hr></hr>

      <div className="card">
        <div className="card-header"> Joke </div>

        <div className="card-body"> <p> {state.joke}</p>
          <footer class="blockquote-footer">Created on <cite title="date"> { state.date }  </cite></footer> </div>


      </div>
    </div>

  );
}
export default App;