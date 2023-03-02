import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import ImageCard from '../ImageCard/ImageCard';

const Favorites = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    // get favorite images from local storage and set state
  }, []);

  return (
    <Container>
      <h1>Favorites</h1>
      <Grid container spacing={2}>
        {favoriteImages.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} favoriteIcon={<Favorite color="secondary" />} />
          </Grid>
        ))}
      </Grid>
      <IconButton component={Link} to="/">
        Home
      </IconButton>
      <IconButton component={Link} to="/gallery">
        Gallery
      </IconButton>
    </Container>
  );
};

export default Favorites;