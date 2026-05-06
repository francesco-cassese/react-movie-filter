function MovieCard({ movie = { title: 'Titolo non disponibile' } }) {
    const { title, genre } = movie;
    return (
        <li className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card h-100 w-100 shadow-sm border-0 bg-white hover-shadow">
                <div className="card-body">
                    <span className="badge rounded-pill bg-primary-subtle text-primary text-uppercase mb-2">
                        {genre}
                    </span>
                    <h2 className="card-title h5 fw-bold text-dark mb-0">{title}</h2>
                </div>
            </div>
        </li>
    )
}
export default MovieCard