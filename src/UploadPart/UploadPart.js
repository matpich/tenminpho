import React from "react";

export default () => {
    return (
            <div className="block" id="submit-part">
                <div className="field has-addons">
                    <div className="control">
                        <input disabled className="input is-medium" type="text" placeholder="Nowa nazwa pliku"></input>
                    </div>
                <div className="control">
                    <button className="button is-dark is-medium">Wyślij</button>
                </div>
                </div>
            <div className="field">
                <div className="control">
                    <p className="help">Jeśli nie chcesz zmieniać nazwy to zostawe to pole puste.</p>
                </div>
            </div>
            </div>

    )
}