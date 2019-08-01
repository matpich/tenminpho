import React from 'react';

import Statistic from '../Statistic/Statistic';

export default props => {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <Statistic />
      </div>
      <div className="navbar-item">
        <p>mateusz.pichniarczyk@mejl.pl</p>
      </div>
      <div className="navbar-item">
        <div className="buttons">
          <a
            href={`${window.location.origin}/login`}
            className="button is-dark"
          >
            Wyloguj
          </a>
        </div>
      </div>
    </div>
  );
};
