import {useEffect, useState, useContext} from "react";
import './App/App.css';

import Form from "./Form.js";
import List from "./List.js";
import Loader from "./Loader";
import {getTweets} from "../lib/database";
import {Link, Redirect} from "react-router-dom";
import AppContext from "../context/AppContext";


function Home() {

    const appContext = useContext(AppContext);
    const [tweet, setTweet] = useState([]);


    useEffect(() => {
        loadTweets();
    }, [])

    const loadTweets = () => getTweets()
        .then((response) => response.json())
        .then((data) => {
            setTweet(data.tweets);
            useContext.isLoading = false;
        });

    return (
        <div className="App">

            <div className="header">
                <Link className="header-link active"
                      to="/">Home</Link>
                <Link className="header-link rout"
                      to="/users">Profile</Link>
            </div>

            {useContext.showAlert && <div>Alert</div>}
            <div className="section-one">
                <Form
                    afterSubmit={loadTweets}
                />
                {useContext.isLoading && <Loader/>}
                <List
                    tweet={tweet}
                />
            </div>
        </div>
    );
};

export default Home;
