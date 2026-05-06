function ListMovie(props) {
    const listMovieJsx = props.listMovie.map(movie => {
        const { title, genre } = movie
        return (
            <li key={crypto.randomUUID()}>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 bg-white hover-shadow">
                        <div className="card-body">
                            <span className="badge rounded-pill bg-primary-subtle text-primary text-uppercase">
                                {genre}
                            </span>
                            <h2 className="card-title fw-bold text-dark mb-0">{title}</h2>
                        </div>
                    </div>
                </div>
            </li >
        )
    })
    return (
        <ul className="list-unstyled">{listMovieJsx}</ul>
    )
}
export default ListMovie