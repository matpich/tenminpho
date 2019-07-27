import React from "react";

import ImagePreview from "../ImagePreview/ImagePreview";

export default (props) => {
    return (
        <div>
            <ImagePreview />
            <div className="block" ></div>
            <form id="submit-part">
                <div className="field has-addons ">
                    <div className="control has-icons-left">
                        <input type="number" min="5" max="30" className="input is-medium" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-clock fa-xs"></i>
                        </span>
                    </div>
                    <div className="control">
                        <input className="input is-medium" type="text" placeholder="Nowa nazwa pliku"></input>
                    </div>
                    <div className="control">
                        <button className="button is-dark is-medium">Wyślij</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <p className="help">Jeśli nie chcesz zmieniać nazwy - zostaw pole z nazwą niezmienione.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}