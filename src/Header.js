import React,{useState} from 'react'

import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';

import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
//es 7 snippets (go download as an extension)

function Header() {
    const [inputSearch,setInputSearch]=useState('');



    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <Link to="/">
            <img  className="header__logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg "></img>
            </Link>

              
                    



            </div>

            <div className="header__input">
            <input  onChange={(e)=>setInputSearch(e.target.value)} placeholder="Search on youtube" type="text"/>
            
            
            <Link to={`/search/${inputSearch}`}>
             <SearchIcon className="header__inputButton"/>
            </Link>
            

            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar className="header__icon" alt="Erdem Devge" src="https://avatars2.githubusercontent.com/u/58105883?s=400&u=488280e48cf124ae983376fb3bf83030f4504e7c&v=4 " />

            </div>
            
            
        </div>
    )
}

export default Header
