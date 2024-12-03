import React, { useState, useEffect } from 'react';

function DestinationForm({ addDestination, editDestination, currentDestination, setCurrentDestination }) {
  const [formState, setFormState] = useState({ id: null, name: '', description: '', image: '' });

  useEffect(() => {
    if (currentDestination) {
      setFormState(currentDestination);
    } else {
      setFormState({ id: null, name: '', description: '', image: '' });
    }
  }, [currentDestination]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.id) {
      editDestination(formState);
    } else {
      addDestination({ ...formState, id: Date.now() });
    }
    setFormState({ id: null, name: '', description: '', image: '' });
    setCurrentDestination(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formState.name} 
        onChange={handleChange} 
        placeholder="Destination Name" 
        required 
      />
      <textarea 
        name="description" 
        value={formState.description} 
        onChange={handleChange} 
        placeholder="Description" 
        required 
      />
      <input 
        type="text" 
        name="image" 
        value={formState.image} 
        onChange={handleChange} 
        placeholder="Image URL" 
        required 
      />
      <button type="submit">{formState.id ? 'Update' : 'Add'} Destination</button>
    </form>
  );
}

export default DestinationForm;
