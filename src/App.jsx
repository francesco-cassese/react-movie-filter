import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import movieList from './data/movieList.js';
import ListMovie from './components/ListMovie.jsx';

function App() {
  const [listMovie, setListMovie] = useState(movieList)
  const [listFiltered, setListFiltered] = useState(movieList)
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState('');

  const changeInputHandler = event => {
    const { value, name } = event.target;
    if (name === 'searchMovie') {
      setSearch(value);
    } else if (name === 'movieGenre') {
      setSelectedGenre(value)
    }
  }

  useEffect(() => {
    const movieFiltered = movieList.filter(movie => {
      const matchTitolo = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchGenere = selectedGenre === "" || movie.genre === selectedGenre;

      return matchTitolo && matchGenere;
    });

    setListFiltered(movieFiltered);
  }, [search, selectedGenre, movieList]);

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
                id="searchMovie"
                placeholder="Inserisci il titolo..."
                value={search}
                onChange={changeInputHandler}
                name='searchMovie'
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="movieGenre" className="form-label fw-bold">
                Genere
              </label>
              <select
                className="form-select"
                id="movieGenre"
                value={selectedGenre}
                onChange={changeInputHandler}
                name='movieGenre'>
                <option value="">Tutti i generi</option>
                <option value="Azione">Azione</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Fantascienza">Fantascienza</option>
              </select>
            </div>
          </div>
          <div className='mt-5'>
            <ListMovie listMovie={listFiltered} />
          </div>
        </form>
      </main>
    </>
  );
}
export default App;
