import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from '../DataLayer/DataLayer';
import { getTokenFromUrl } from '../Spotify/Spotify';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue ();
    // console.log(playlists);

    return(
        <div className="sidebar">
            <img 
             className="sidebar__logo"
             src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
             alt=""
            />

            <SidebarOption Icon= {HomeIcon} title ="Home"/>
            <SidebarOption Icon= {SearchIcon} title ="Search"/>
            <SidebarOption Icon= {LibraryMusicIcon} title ="Your Library"/>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            <SidebarOption title="MooD Booater"/>
            <SidebarOption title="Healinng Playlist"/>
            <SidebarOption title="Morning Vibes"/>
            <SidebarOption title="Sleep Playlist"/>

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
            

        </div>
    );
}

export default Sidebar;