import React from "react";
import "./Body.css"
import Header from "../Header/Header";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

function Body ({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/Azap9twk3Npf-6OSE9wbJhGdndQ3TFEgS6rSF3sIliHlP7uvApIv9YJXwKO4xaWM3pepMlkbljnoN1lxcAtO-grmQfcRAcu0o9GWU8CFI-0=/MTA6MDM6NjFUMjAtMjAtMg=="/>
                {/* <img src={discover_weekly?.images.url}/> */}
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    {/* <p>Description : things unsolved on ur project are 
                    the img on header and footer and body too </p> */}
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* {discover_weekly?.tracks.items.map((item =>
                   <SongRow track = {item.track}/> 
                ))}; */}
                
            </div>

        </div>
    );
}

export default Body;