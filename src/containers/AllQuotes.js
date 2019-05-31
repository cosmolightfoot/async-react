import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/Quotes';
import getQuotes from '../services/getQuotes';

export default class AllQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: true
  };

  fetchQuotes = () => {
    this.setState({ loading: true });
    getQuotes(this.props.count)
      .then(quotes => this.setState({ loading: false, quotes }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes, loading } = this.state;
    if(loading) return <h1>Loading</h1>;

    return (
      <Quotes quotes={quotes} />
    );
  }

}
