import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState} from "react";
import Home from "../Home";
import User from "../User";
import AppContext from "../../context/AppContext";

function App() {
    const [userName, setUserName] = useState("Nataliia");
    const [datesArray, setDatesArray] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [tweet, setTweet] = useState([]);

    return (
        <>
            <Router>
                <AppContext.Provider
                    value={{
                        userName: userName,
                        updateUserName: (newUserName) => setUserName(newUserName),
                        setUserName: setUserName,
                        datesArray: datesArray,
                        setDatesArray: setDatesArray,
                        showAlert: showAlert,
                        setShowAlert: setShowAlert,
                    }}
                >
                    <Switch>
                        <Route exact
                               path="/users"
                               component={User}/>
                        <Route exact
                               path="/"
                               component={Home}/>
                    </Switch>
                </AppContext.Provider>

            </Router>
        </>
    );
}

export default App;
