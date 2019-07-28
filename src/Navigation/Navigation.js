import React from "react";

export default () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href={window.location.origin}>
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a href={`${window.location.origin}/signup`} className="button is-primary">
                            <strong>Zarejestruj</strong>
                        </a>
                        <a href={`${window.location.origin}/login`} className="button is-light">
                            Zaloguj
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}