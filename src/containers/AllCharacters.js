import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import getCharacters from '../services/getCharacters';
import Paging from '../components/Paging';

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
      .then((results) => {
        this.setState({ loading: false, characters: results.results, totalPages: results.info.pages });
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
    const { characters, currentPage, totalPages } = this.state;
    return (
      <Paging currentPage={currentPage} totalPages={totalPages} nextPage={this.nextPage}>
        <Characters characters={characters} />
      </Paging>
    );
  }  
}
