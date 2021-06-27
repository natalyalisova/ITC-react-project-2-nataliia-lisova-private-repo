import {useEffect, useState, useContext} from "react";
import React from 'react';
import "./App/App.css";
import {addTweet} from "../lib/database";
import AppContext from "../context/AppContext";


function Form(props) {

    const appContext = useContext(AppContext);

    const [message, setMessage] = React.useState(
        localStorage.getItem('myValueInLocalStorage') || ''
    );
    const [userName, setUserName] = useState(appContext.userName);
    const [date, setDate] = useState("");
    const [formData, setFormData] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [isErrorMessage, setIsErrorMessage] = useState(false);


    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', message);
    }, [message]);

    const handleInputMessage = event => setMessage(event.target.value);


    useEffect(() => {
        setFormData({
            content: message,
            userName: appContext.userName,
            date: new Date().toISOString(),
        });
    }, [message, userName, date]);

    useEffect(() => {
        if (formData.content && formData.content.length <= 140) {
            setIsDisabled(false);
        } else if (formData.content && formData.content.length > 140) {
            setIsDisabled(true);
        } else {
            setIsDisabled(true);
        }

    }, [formData]);


    useEffect(() => {
        if (formData.content && formData.content.length > 140) {
            setIsErrorMessage(true);
        } else {
            setIsErrorMessage(false);
        }

    }, [formData]);


    const handleClick = () => {

        let newObject = formData;

        addTweet(newObject)
            .then((response) => {
                if (response.status === 200) {

                    appContext.setDatesArray((prevState) => {
                        return [newObject, ...prevState];
                    });
                    setFormData({});
                    setMessage("");
                    setDate("");
                    props.afterSubmit();
                } else {
                    useContext.setShowAlert(true);
                }
            })
    }


    return (
        <div className="form">
            <textarea
                placeholder="What you have in mind..."
                value={message}
                className="text-field"
                onInput={handleInputMessage}
            />
            <div className="form-button-container">

                {isErrorMessage && (<div className="form-error-message">The tweet can't contain more then 140 chars.</div>)}

                <div className="form-button">
                    {!useContext.isLoading && (
                        <button
                            disabled={isDisabled}
                            className={`input-button input-button-${isDisabled}`}
                            onClick={handleClick}
                        >
                            Tweet
                        </button>)}
                </div>

            </div>

        </div>
    );
}

export default Form;
