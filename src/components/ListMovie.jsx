function ListMovie(props) {
    const listMovieJsx = props.listMovie.map(movie => {
        const { title, genre } = movie
        return (
            <li key={crypto.randomUUID()}>
                <div className="mb-2">
                    <span className="badge rounded-pill bg-primary-subtle text-primary text-uppercase">
                        {genre}
                    </span>
                    <h2 className="card-title fw-bold text-dark mb-0">{title}</h2>

                </div>
            </li>
        )
    })
    return (
        <ul className="list-unstyled">{listMovieJsx}</ul>
    )
}
export default ListMovie