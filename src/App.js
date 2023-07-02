import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Row from './Components/Row/Row';
import requests from './request';


function App() {

  return (
    <div className="App">

      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORGINALS"
        fechUrl={requests.fetchNetflixeOrginal}
        isLargeRow
      />
      <Row title="Trending Now" fechUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fechUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fechUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fechUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movies" fechUrl={requests.fetchHorrerMovies} />
      <Row title="Romance Movies" fechUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fechUrl={requests.fetcDocumentaries} />
    </div>
  );
}

export default App;
