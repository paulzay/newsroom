import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

export default function Article({ article }) {
  return (
    <article>
      <div className="art-body">
        <h3 className="">{article.title}</h3>
        <p>{article.source.name}</p>
        <img src={article.urlToImage} alt="article" />
        <p className="">{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer"> Read more </a>
      </div>
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
  }).isRequired,
};
