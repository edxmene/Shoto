import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ id, name, image, countPlaces, job }) => {
  return (
    <Link
      to={`/${id}/places`}
      className="card user border-secondary mb-3"
      style={{ minWidth: "200px" }}
    >
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h6 className="card-title">{job}</h6>
        <p className="card-text">Number of visits: {countPlaces}</p>
      </div>
    </Link>
  );
};

export default UserItem;
