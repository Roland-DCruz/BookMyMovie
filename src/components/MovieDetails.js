import React from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import MovieSummary from "./MovieSummary";


function MovieDetails({ moviesData }) {

    const { id } = useParams();
    const selectedMovie = moviesData.find(movie => movie.show.id.toString() === id);
    console.log("selected movie: ", selectedMovie);
    console.log("id: - ", id);

    let summary = selectedMovie.show.summary;
    const genres = selectedMovie.show.genres.join(', ');
    let rating = "-";
    if (selectedMovie.show.rating.average !== null) {
        rating = selectedMovie.show.rating.average;
    }


    return (
        <div>
            <Header></Header>
            <div className="movie-desrp-header">
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={selectedMovie.show.image.original}
                                className="img-fluid rounded smaller-image movie-description-img"
                                alt="Movie Thumbnail"
                            />
                        </div>
                        <div className="col">
                            <h1>{selectedMovie.show.name}</h1>
                            <p><b>Rating:</b> {rating}</p>
                            <p><b>Category:</b> {genres}</p>
                            <p><b>Language:</b> {selectedMovie.show.language}</p>
                            <p>
                                <b>Summary:</b> <br />
                                <MovieSummary summary={summary} />
                            </p>
                            <Link to={`/form/${selectedMovie.show.name}`}>
                                <button className="btn btn-primary btn-lg">Book Ticket</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MovieDetails;
