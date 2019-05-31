import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import uuid from 'uuid/v4'; 

function Quotes({ quotes }) {
  const quoteList = quotes.map(quote => {
    return <Quote key={uuid()} quote={quote.quote} character={quote.character} image={quote.image} />
  });

  return <ul>{quoteList}</ul>;
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf([
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  ]).isRequired
};
