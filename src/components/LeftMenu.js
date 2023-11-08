import React from 'react'
import"../styles/LeftMenu.css";
import {FaSpotify, FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from"react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from './MenuList';
import { PlayList } from './PlayList';
import { TrackList } from './TrackList';


function LeftMenu() {
  return (
    <div className="leftMenu">
    <div className="logoContainer">
    <i>
        <FaSpotify />
    </i>
    <h2>Spotify</h2>
    <i>
        <FaEllipsisH />
    </i>
    </div>
    <div className="searchBox">
        <input type="text" placeholder="Search"/>
        <i className="searchIcon"><BiSearchAlt/></i>
    </div>
    <Menu title={'Menu'} menuObject={MenuList} />
    <PlayList/>
    <TrackList/>
    </div>
 )
}

export {LeftMenu}