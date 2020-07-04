import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getImage } from "../actions/images";

const ImageZoomed = ({ match, getImage, images: { image, loading } }) => {
    useEffect(() => {
        getImage(match.params.photoId);
    }, [getImage, match.params.photoId]);

    return (
        <div className="big-img-cont">
            <Link className="back-link" to="/">
                Go Back
            </Link>
            {image !== null && (
                <Fragment>
                    <div className="img-info">
                        <div>
                            <h4 className="desc">{image.alt_description}</h4>
                            <p>- by {image.user.name}</p>
                        </div>

                        <a
                            href={image.urls.raw}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="download-link">Download</button>
                        </a>
                    </div>
                    <img
                        src={`${image.urls.regular}`}
                        alt={image.alt_description}
                    ></img>
                </Fragment>
            )}
        </div>
    );
};

ImageZoomed.propTypes = {
    getImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    images: state.images,
});

export default connect(mapStateToProps, { getImage })(ImageZoomed);
