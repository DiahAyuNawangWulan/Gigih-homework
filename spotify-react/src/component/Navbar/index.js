import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
    return(<div>
        <ul>
            <li>
                <Link to="/createPlaylist">Create Playlist</Link>
            </li>
            <li>
                <Link to="/">Login</Link>
            </li>
        </ul>
    </div>);
}