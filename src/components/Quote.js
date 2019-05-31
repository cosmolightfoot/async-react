import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, character, image }) {
  return (
    <li>
      <img src={image} />
      <h3>{character}</h3>
      <p>{quote}</p>
    </li>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
