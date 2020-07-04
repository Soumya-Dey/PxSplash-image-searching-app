import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getImages } from "../actions/images";

const TopBar = ({ getImages }) => {
    useEffect(() => {
        getImages("Mountain");
    }, [getImages]);

    const [query, setQuery] = useState("");

    return (
        <div className="topbar-cont">
            <div className="overlay">
                <Link to="/">
                    <h1>PxSplash</h1>
                </Link>

                <form
                    className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        getImages(query);
                        setQuery("");
                    }}
                >
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for photos..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    ></input>
                    <button type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>

                <div className="links">
                    <button
                        onClick={() => {
                            getImages("Mountain");
                        }}
                    >
                        Mountain
                    </button>
                    <button
                        onClick={() => {
                            getImages("Forest");
                        }}
                    >
                        Forest
                    </button>
                    <button
                        onClick={() => {
                            getImages("Beach");
                        }}
                    >
                        Beach
                    </button>
                    <button
                        onClick={() => {
                            getImages("Cityscape");
                        }}
                    >
                        Cityscape
                    </button>
                </div>
            </div>
        </div>
    );
};

TopBar.propTypes = {
    getImages: PropTypes.func.isRequired,
};

export default connect(null, { getImages })(TopBar);
