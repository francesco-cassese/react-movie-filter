import MovieCard from "./MovieCard"

function ListMovie({ listMovie }) {
    const listaFilmJsx = listMovie.map((movie) => {
        return (
            <MovieCard
                key={movie.id}
                movie={movie}
            />
        );
    });
    return (
        <ul className="list-unstyled row mt-5">
            {listaFilmJsx}
        </ul>
    )
}
export default ListMovie