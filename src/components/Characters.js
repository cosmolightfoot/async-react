import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import uuid from 'uuid/v4';

function Characters({ characters }) {
  const charList = characters.map(char => {
    return <Character key={uuid()} character={char} />;
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
