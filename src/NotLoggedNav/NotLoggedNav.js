import React from 'react';

export default props => {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a
            href={`${window.location.origin}/signup`}
            className="button is-primary"
          >
            <strong>Zarejestruj</strong>
          </a>
          <a
            href={`${window.location.origin}/login`}
            className="button is-light"
          >
            Zaloguj
          </a>
        </div>
      </div>
    </div>
  );
};
