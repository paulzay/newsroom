import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/index';
import Article from '../components/Article/Article';

class Articles extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { articles } = this.props;

    return (
      <div>
        {
          articles.map(article => (
            <Article key={article.id} article={article} />
          ))
        }
      </div>
    );
  }
}
Articles.propTypes = {
  // filter: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
