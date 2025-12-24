import {
  BrowserRouter as Routes, Route, Link
} from "react-router-dom";
import "./index.css";

function Home() {
    return (
        <div className="home">
            <h2>
                <Link to="/game">Play Game</Link>
            </h2> 
        </div>
    );
}

export default Home
