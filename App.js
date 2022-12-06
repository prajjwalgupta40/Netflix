import React from "react";
import Row from "./Components/Row";
import request from "./request";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
{/*       <h1>Hi React</h1>
 */}  <Nav />   
      <Banner />
      <Row title="Netflix Orignals" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={request.fetchDocumantaries}/>
       
    </div>
  );
}

export default App;
