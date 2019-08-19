import React from 'react';

export default () => {
  return (
    <form id="submit-part">
      <div className="field">
        <div className="control">
          <button className="button is-dark is-medium">Wyślij</button>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <h1 className="title is-5">
            Zdjęcie będzie dostępne 5 minut. Jeśli chcesz przechować je nawet do
            30 minut - zaloguj się.
          </h1>
        </div>
      </div>
    </form>
  );
};
