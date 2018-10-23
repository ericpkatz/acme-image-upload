import React from 'react';
import { connect } from 'react-redux';

const Images = ({ images })=> {
  return (
      <ul>
      {
        images.map( image => <img key={ image.id } src={ image.data } />)

      }</ul>
  );
};

const mapStateToProps = ({ images })=> {
  return {
    images
  };
};

export default connect(mapStateToProps)(Images);
