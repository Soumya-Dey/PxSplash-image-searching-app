import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ImageItem from "./ImageItem";

const ImageResults = ({ images: { images, loading, query } }) => {
    return (
        <Fragment>
            <h1 className="query-text">{query} Images</h1>
            <div className="image-container">
                {loading
                    ? "Loading..."
                    : images.map((img) => (
                          <ImageItem key={img.id} image={img} />
                      ))}
            </div>
            <p className="copy-text">
                &copy; {new Date().getFullYear()} | Made with 💛 by&nbsp;
                <a
                    href="https://github.com/Soumya-Dey"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Soumya Dey
                </a>
            </p>
        </Fragment>
    );
};

ImageResults.propTypes = {
    images: PropTypes.object,
};

const mapStateToProps = (state) => ({
    images: state.images,
});

export default connect(mapStateToProps, {})(ImageResults);
