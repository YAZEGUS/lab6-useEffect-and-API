function FilmCard({ film }) {
    return (
      <div className="film-card">
        <div className="card-image">
          <img src={film.image} alt={film.title} />
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3>{film.title}</h3>
            <span className="year-badge">{film.release_date}</span>
          </div>
          <h4 className="original-title">{film.original_title_romanised}</h4>
          <p className="description">{film.description}</p>
          
          <div className="rating">
            ⭐️ {film.rt_score}% Rotten Tomatoes
          </div>
        </div>
      </div>
    );
  }
  
  export default FilmCard;