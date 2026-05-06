import Input from "./reusable/Input"

function SearchBar(props) {
    const { search, onInputChange, selectedGenre } = props
    return (
        <form className='p-4 bg-light rounded shadow-sm'>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="searchMovie" className="form-label fw-bold text-secondary small">
                        Cerca un film
                    </label>
                    <Input
                        type="text"
                        id="searchMovie"
                        placeholder="Inserisci il titolo..."
                        value={search}
                        onChange={onInputChange}
                        name='searchMovie'
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="movieGenre" className="form-label fw-bold text-secondary small">
                        Filtra per Genere
                    </label>
                    <select
                        className="form-select"
                        id="movieGenre"
                        value={selectedGenre}
                        onChange={onInputChange}
                        name='movieGenre'>
                        <option value="">Tutti i generi</option>
                        <option value="Azione">Azione</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Fantascienza">Fantascienza</option>
                    </select>
                </div>
            </div>
        </form>
    )
}
export default SearchBar