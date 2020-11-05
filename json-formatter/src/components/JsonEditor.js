import React, { useState, useRef } from 'react';
import ReactJson from 'react-json-view'

const JsonEditor = () => {
    const [isFormat, setIsFormat] = useState(false);
    const [jsonObject, setJsonObject] = useState(null);
    const textareaRef = useRef();
    const handleChange = (event) => {
        debugger;
        if (event && event.target && event.target.value) {
            setJsonObject(event.target.value);
        }
    };
    const handleFormat = () => {
        setJsonObject(JSON.parse(jsonObject));
        setIsFormat(true);
    };

    return (
        <React.Fragment>
            <nav className="nav-container pt-1 pb-1 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 pull-left nav-container__logo">
                            <h3 className="nav-container__logo--center">Json Editor</h3>
                        </div>
                        <div className="col-sm-4 pull-right nav-container__menu">
                            <span>Home</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <header className="header-container">
                    <div className="header__title pt-2 pb-2">
                        <span className="header__title--align-center">Json Document</span>
                    </div>
                    <div>
                        <ul className="header__menu mb-0" >
                            <li className="header__menu-element">
                                <button className="btn btn--element-color">code</button>
                            </li>
                            <li className="header__menu-element">
                                <button className="btn btn--element-color">tree</button>
                            </li>
                            <li className="header__menu-element">
                                <button className="btn btn--element-color" onClick={handleFormat}>
                                    <i className="fa fa-indent" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="header__menu-element">
                                <button className="btn btn--element-color">
                                    <i className="fa fa-align-left" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="header__menu-element">
                                <button className="btn btn--element-color">
                                    <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                                </button>
                                {/* <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> */}
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="content full-height">
                    {isFormat ? <ReactJson src={jsonObject} /> : <textarea value={jsonObject || ''} onChange={handleChange} ref={textareaRef} className="form-control content__textarea"></textarea>}
                </div>
            </div>
        </React.Fragment>
    );
}
export default JsonEditor;  