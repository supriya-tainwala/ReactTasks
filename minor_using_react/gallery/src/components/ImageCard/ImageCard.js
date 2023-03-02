import React from 'react';
import { Card, CardMedia, CardActions, IconButton } from '@material-ui/core';

const ImageCard = ({ image, onFavorite, favoriteIcon }) => {
  const handleImageFavorite = () => {
    onFavorite(image.id);
  };

  return (
    <Card>
      <CardMedia component="img" image={image.url} />
      <CardActions>
        <IconButton onClick={handleImageFavorite}>{favoriteIcon}</IconButton>
      </CardActions>
    </Card>
  );
};

export default ImageCard;