import React from "react";
import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import './Player.css';
import { TableBody } from "@material-ui/core";

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>

            <Footer/>
        </div>
    );
}

export default Player;