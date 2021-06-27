import React from "react";

const AppContext = React.createContext({
    userName: "",
    updateUserName: "",
    setUserName:"",
    datesArray: "",
    setDatesArray: "",
    showAlert: "",
    setShowAlert: "",
    isLoading: "",
    setIsLoading: "",
    tweet: "",
    setTweet: "",
});

export default AppContext;
