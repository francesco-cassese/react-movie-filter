import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import movieList from './data/movieList.js';
import ListMovie from './components/ListMovie.jsx';

function App() {
  const [listMovie, setListMovie] = useState(movieList)
  const [search, setSearch] = useState('');


  return (
    <>
      <Header />
      <main>
        <form>
          <div>
            <div className="col-md-6">
              <label htmlFor="searchMovie" className="form-label fw-bold">
                Cerca un film
              </label>
              <input
                type="text"
                className="form-control"
                id="search-movie"
                placeholder="Inserisci il titolo..."
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="movieGenre" className="form-label fw-bold">
                Genere
              </label>
              <select className="form-select" id="movieGenre" defaultValue="">
                <option value="" disabled>Scegli un genere...</option>
                <option value="azione">Azione</option>
                <option value="commedia">Commedia</option>
                <option value="drammatico">Drammatico</option>
                <option value="fantascienza">Fantascienza</option>
              </select>
            </div>
          </div>
          <ListMovie listMovie={movieList} />
        </form>
      </main>
    </>
  );
}
export default App;
