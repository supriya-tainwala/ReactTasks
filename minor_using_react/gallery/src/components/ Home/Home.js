import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';

const Home = () => {
  const handleImageUpload = (event) => {
    // handle image upload
  };

  return (
    <Container>
      <h1>Home</h1>
      <Button variant="contained" component="label">
        Choose File
        <input type="file" hidden onChange={handleImageUpload} />
      </Button>
      <Button variant="contained" component={Link} to="/gallery">
        Gallery
      </Button>
      <Button variant="contained" component={Link} to="/favorites">
        Favorites
      </Button>
    </Container>
  );
};

export default Home;