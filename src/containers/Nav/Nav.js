import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SourceFilter from '../../components/Filter/Filter';
import './nav.css';

export default function Nav({ changeFilter }) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Thenewsroom.jpg" alt="logo" />
      <div className="category__filter">
        <SourceFilter changeFilter={changeFilter} />
      </div>
    </div>
  );
}

Nav.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
