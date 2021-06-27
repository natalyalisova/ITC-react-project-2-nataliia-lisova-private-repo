import "./App/App.css";
import React, {useContext} from "react";
import AppContext from "../context/AppContext";


function List(props) {
    // const appContext = useContext(AppContext);
    // const [tweet, setTweet] = useState([]);
    return (
        <div className="list">
            {props.tweet.map(data =>
                <div className="list-item">
                    <div className="list-item-header">
                        <div>{data.userName}</div>
                        <div className="item-date">{data.date}</div>
                    </div>
                    <div className="item-message">{data.content}</div>
                </div>
            )}

        </div>
    );
}

export default List;
