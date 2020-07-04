import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageItem = ({ image }) => {
    return (
        <Link to={`/${image.id}`}>
            <div className="imgitem-cont">
                <div
                    className="image-item"
                    style={{
                        backgroundImage: `url('${image.urls.small}')`,
                    }}
                ></div>
            </div>
        </Link>
    );
};

ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
};

export default ImageItem;
