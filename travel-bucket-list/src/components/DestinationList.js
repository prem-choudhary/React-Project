import React from 'react';
import DestinationItem from './DestinationItem';

function DestinationList({ destinations, setCurrentDestination, removeDestination }) {
  return (
    <div>
      {destinations.map((destination) => (
        <DestinationItem 
          key={destination.id} 
          destination={destination} 
          setCurrentDestination={setCurrentDestination} 
          removeDestination={removeDestination} 
        />
      ))}
    </div>
  );
}

export default DestinationList;
