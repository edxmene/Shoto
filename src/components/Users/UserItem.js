import React from "react";

const UserItem = ({ name, image, countPlaces, job }) => {
  return (
    <div className="card border-secondary mb-3" style={{ minWidth: "200px" }}>
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h6 className="card-title">{job}</h6>
        <p className="card-text">Number of visits: {countPlaces}</p>
      </div>
    </div>
  );
};

export default UserItem;
