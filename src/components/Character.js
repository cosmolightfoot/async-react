import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, image } = character;
  return (
    <li>
      <h1>{name}</h1>
      <img src={image} />
      <dl>
        <dt>Species</dt>
        <dd>{species}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;


