import React, {useState, useEffect} from 'react';
import axios from 'axios'
  
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
     <div>
          <form onSubmit={handleSearch}>
              <input type = "text"
              onChange={e => setQuery(e.target.value)}
              value={query}/>


<button type = "submit"> Search </button>
          </form>

          {jokes.map(joke => {
              return (
                  <p> {joke.value} </p>
              )
          })}
        </div>
      );
}
export default App;