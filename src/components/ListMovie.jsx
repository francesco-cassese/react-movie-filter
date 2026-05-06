function ListMovie(props) {
    const listMovieJsx = props.listMovie.map(movie => {
        const { title, genre } = movie
        return (
            <li key={crypto.randomUUID()}>
                <div>
                    <h2>{title}</h2>
                    <span>{genre}</span>
                </div>
            </li>
        )
    })
    return (
        <ul>{listMovieJsx}</ul>
    )
}
export default ListMovie