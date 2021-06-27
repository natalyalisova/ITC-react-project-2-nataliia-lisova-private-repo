import {Link} from "react-router-dom";
import React, {useState, useContext} from "react";
import "./App/App.css";
import AppContext from "../context/AppContext";


function User() {

    const appContext = useContext(AppContext);
    const [userName, setUserName] = React.useState(
        localStorage.getItem('myValueInLocalStorage1') || appContext.userName
    );

    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage1', userName);
    }, [userName]);


    const handleInputUser = event => {
        setUserName(event.target.value);
    }

    const handleClick = () => {
        appContext.setUserName(userName);
    }


    return (
        <div className="App">
            <div className="header">
                <Link className="header-link rout"
                      to="/">Home</Link>
                <Link className="header-link active"
                      to="/users">Profile</Link>
            </div>
            <div className="User-body">
                <h1 className="User-title">Profile</h1>
                <div className="User-name-form">
                    <label htmlFor="userName"
                           className="User-label"
                    >User Name</label>
                    <input type="text"
                           name="userName"
                           value={userName}
                           className="User-input"
                           onInput={handleInputUser}/>
                    <div className="save-button-wrapper">
                        <button
                            className="save-button"
                            onClick={handleClick}
                        >
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default User;
