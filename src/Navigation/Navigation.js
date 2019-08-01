import React from 'react';

import Statistic from '../Statistic/Statistic';
import NotLoggedNav from '../NotLoggedNav/NotLoggedNav';
import LoggedNav from '../LoggedNav/LoggedNav';

export default () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href={window.location.origin}>
          <img
            src={`${window.location.origin}/logo.svg`}
            width="190"
            height="56"
            alt="logo"
          />
        </a>
      </div>
      <LoggedNav />
      {/* <NotLoggedNav /> */}
    </nav>
  );
};
