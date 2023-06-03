import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import fetchData from "../movies_data";
import MovieForm from "./MovieForm";



function App() {

    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        fetchData()
            .then(data => {
                console.log("2: ", data);
                setMoviesData(data);
                setLoading(false);    //loading is complete
            })
            .catch(error => {
                console.error(error);
                setLoading(false);    // loading is complete, even though error
            });
    }, []);

    return (

        <div >
            {loading ? (          // if still loading, wait
                <div>Loading...</div>
            ) : (                 
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path='/' element={<Home />} exact />
                            <Route path="/movies/:id" element={<MovieDetails moviesData={moviesData} />} />
                            <Route path="/form/:movieName" element={<MovieForm />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;   
