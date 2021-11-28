import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  return (
    <div className="placesList">
      {places.map((place) => {
        return (
          <div key={place.id}>
            <PlaceItem {...place} />
          </div>
        );
      })}
    </div>
  );
};

export default PlaceList;
