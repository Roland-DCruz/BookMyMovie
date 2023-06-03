import React from "react";
import { Link } from "react-router-dom"


function MovieCard(props) {

    const genres = props.genres.join(', ');
    let id = "";

    let rating = "-";
    if (props.rating !== null) {
        rating = props.rating;
    }

    function handleClick() {
        console.log("Clicked")
    }

    id = props.id;
    let path = '/movies/' + id;
    console.log(path);

    return (
        <div className="card show-card">

            {console.log(id)}

            <Link to={path}>
                <button onClick={handleClick} >
                    <div>
                        <img className="movie-img" src={props.img} />
                    </div>
                    <div className="card-title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="card-description">
                        <div>{genres}</div>
                        <div>Rating: {rating}</div>
                    </div>
                </button>
            </Link>
        </div>
    );
}


export default MovieCard;