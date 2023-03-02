import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import ImageCard from '../ImageCard/ImageCard';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // get images from local storage and set state
  }, []);

  const handleImageFavorite = (id) => {
    // handle image favorite
  };

  return (
    <Container>
      <h1>Gallery</h1>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard
              image={image}
              onFavorite={handleImageFavorite}
              favoriteIcon={
                image.favorite ? <Favorite color="secondary" /> : <FavoriteBorder />
              }
            />
          </Grid>
        ))}
      </Grid>
      <IconButton component={Link} to="/">
        Home
      </IconButton>
      <IconButton component={Link} to="/favorites">
        Favorites
      </IconButton>
    </Container>
  );
};

export default Gallery;