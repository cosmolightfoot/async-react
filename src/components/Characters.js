import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const charList = characters.map((char, i) => {
    return <Character key={i} character={char} />;
  });

  return (
    <ul>
      {charList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
