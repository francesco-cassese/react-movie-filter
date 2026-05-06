import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import movieList from './data/movieList.js';
import ListMovie from './components/ListMovie.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [listMovie, setListMovie] = useState(movieList)
  const [listFiltered, setListFiltered] = useState(movieList)
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState('');

  const changeInputHandler = event => {
    const { value, name } = event.target;
    if (name === 'searchMovie') {
      if (value.length <= 50) {
        setSearch(value);
      }
    } else if (name === 'movieGenre') {
      setSelectedGenre(value)
    }
  }

  useEffect(() => {
    const movieFiltered = movieList.filter(movie => {
      const matchTitolo = movie.title.toLowerCase().includes(search.trim().toLowerCase());
      const matchGenere = selectedGenre === "" || movie.genre === selectedGenre;

      return matchTitolo && matchGenere;
    });

    setListFiltered(movieFiltered);
  }, [search, selectedGenre, movieList]);

  return (
    <>
      <Header />
      <main>
        <SearchBar
          search={search}
          selectedGenre={selectedGenre}
          onInputChange={changeInputHandler}
        />

        <div className="container py-2">
          <div className="row g-4">
            <ListMovie listMovie={listFiltered} />
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
