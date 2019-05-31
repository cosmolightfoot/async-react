import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/Characters';
import getCharacters from '../services/getCharacters';


export default class AllCharacters extends PureComponent {
  state = {
    loading: true,
    characters: [],
    currentPage: 1,
    totalPages: 1
  };

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters(this.state.currentPage)
      .then(({ results, pages }) => {
        this.setState({ loading: false, characters: results, totalPages: pages });
      });
  }

  nextPage = page => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(_, prevState) {
    if(prevState.currentPage !== this.state.currentPage) this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <Characters characters={characters} />
    );
  }  
}
