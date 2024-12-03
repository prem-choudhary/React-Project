import React, { useState } from 'react';
import DestinationForm from './components/DestinationForm';
import DestinationList from './components/DestinationList';
import './App.css';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState(null);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  const editDestination = (updatedDestination) => {
    setDestinations(destinations.map(dest => (dest.id === updatedDestination.id ? updatedDestination : dest)));
  };

  const removeDestination = (id) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
  };

  return (
    <div className="App">
      <h1>Travel Bucket List</h1>
      <DestinationForm 
        addDestination={addDestination} 
        editDestination={editDestination} 
        currentDestination={currentDestination} 
        setCurrentDestination={setCurrentDestination} 
      />
      <DestinationList 
        destinations={destinations} 
        setCurrentDestination={setCurrentDestination} 
        removeDestination={removeDestination} 
      />
    </div>
  );
}

export default App;
