import React from "react";

function DestinationItem({
  destination,
  setCurrentDestination,
  removeDestination,
}) {
  return (
    <div className="destination-item">
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <img src={destination.image} alt={destination.name} />
      <button onClick={() => setCurrentDestination(destination)}>Edit</button>
      <button onClick={() => removeDestination(destination.id)}>Delete</button>
    </div>
  );
}

export default DestinationItem;
