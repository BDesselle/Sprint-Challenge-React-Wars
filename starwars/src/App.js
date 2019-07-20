import React from 'react';
import axios from 'axios';
import './App.css';
import CharCard from './components/CharCard/CharCard';

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      /* GET */
      .get('https://swapi.co/api/people/')
      /* THEN */
      .then(res => {
        const results = res.data.results;
        console.log('%c Logging Response Results...', 'color: green; font-weight: bold;');
        console.table(results);
        setData(results);
      })
      /* CATCH */
      .catch(err => {
        console.log('%c Error Caught!', 'color: red; font-weight: bold;');
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">ReactWars</h1>
      <div class="container">
        <CharCard characters={data} />
      </div>
    </div>
  );
}

export default App;
