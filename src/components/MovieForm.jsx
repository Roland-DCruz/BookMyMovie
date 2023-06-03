import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";


function MovieForm() {

    const [movieName, setMovieName] = useState("");
    const { movieName: paramName } = useParams();

    useEffect(() => {
        setMovieName(paramName);
    }, [paramName]);

    return (
        <div>
            <Header />
            <div className="col justify-content-center align-items-center " style={{ height: "80vh", padding: "5% 15%" }}>
                <div className="form-container p-4 border form">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="movie" className="form-label">Movie:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Movie Name"
                                className="form-control"
                                value={movieName}
                                readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ticket" className="form-label">Number of tickets:</label>
                            <select className="form-control" id="ticket">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <fieldset className="mb-3">
                            <label className="form-label">Language</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="english"
                                    name="language"
                                    value="English"
                                />
                                <label className="form-check-label" htmlFor="english">
                                    English
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="hindi"
                                    name="language"
                                    value="Hindi"
                                />
                                <label className="form-check-label" htmlFor="hindi">
                                    Hindi
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="marathi"
                                    name="language"
                                    value="Marathi"
                                />
                                <label className="form-check-label" htmlFor="marathi">
                                    Marathi
                                </label>
                            </div>
                        </fieldset>
                        <div className="mb-3">
                            <label htmlFor="cost" className="form-label">Cost: ₹600</label>
                        </div>
                        <button className="btn btn-primary " >
                            Book Now
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default MovieForm;
