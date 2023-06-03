import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieCard from "./MovieCard";
import fetchData from "../movies_data";


// fetching the movies data

function createCard(movie) {
    return (
        <MovieCard movie={movie}
            key={movie.show.id}
            id={movie.show.id}
            name={movie.show.name}
            genres={movie.show.genres}
            rating={movie.show.rating.average}
            img={movie.show.image.medium}
        />
    );
}

function Home() {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        fetchData()
            .then(data => {
                console.log("2: ", data);
                setMoviesData(data);
                setLoading(false);    
            })
            .catch(error => {
                console.error(error);
                setLoading(false);    
            });
    }, []);

    return (
            <div>
                <Header />
                <div className="show-container">
                    {loading ? (          
                        <div>Loading...</div>
                    ) : (                 
                        moviesData.map(createCard)
                    )}
                </div>
            </div>
    );
}


export default Home;   

