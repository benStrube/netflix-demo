import React from 'react'
import './App.css';
import Row from './Row';
import reuqests from './requests';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix Demo Front End</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={reuqests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
