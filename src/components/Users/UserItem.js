import React from "react";

const UserItem = ({ name, image, countPlaces, job }) => {
  return (
    <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
      <div class="card-header">{name}</div>
      <div class="card-body">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h6 class="card-title">{job}</h6>
        <p class="card-text">Number of places visited: {countPlaces}</p>
      </div>
    </div>
  );
};

export default UserItem;
