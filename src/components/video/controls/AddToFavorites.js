import React from 'react';
import { FavoriteIcon } from '../assets/icons';
import Control from '../Control';

const AddToFavorites = ({ callback, isFavorite }) => {
  return (
    <Control
      style={{
        position: 'absolute',
        top: 30,
        right: 0,
      }}
      callback={callback}
    >
      <FavoriteIcon name={isFavorite ? 'favorite' : 'favorite-border'} />
    </Control>
  );
};

export default AddToFavorites;
