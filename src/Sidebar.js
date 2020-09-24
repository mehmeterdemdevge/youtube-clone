import React from 'react'
import "./SideBar.css";
import  SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAllOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore';
import SidebarRow from "./SideBarRow";



function Sidebar () {
    return (
        <div className="sidebar">
            
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon= {SubscriptionIcon} title="Subscription"/>
            <hr/>
            <SideBarRow Icon={VideoLibraryIcon} title="Libary"/>
            <SideBarRow Icon={HistoryIcon} title="History"/>
            <SideBarRow Icon={OnDemandVideoIcon} title="Your videos"/>
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SideBarRow Icon={ThumbUpAllOutlinedIcon} title="Liked videos"/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>

            
        </div>
    )
}

export default Sidebar
