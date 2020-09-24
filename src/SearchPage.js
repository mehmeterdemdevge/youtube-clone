import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>Filter</h2>

            </div>
            <div>
                <hr/>
            </div>
            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                channel="Netflix"
                verified={true}
                subs="660K"
                noOfVideos=""
                description="You can find awesome stream"

            
            />
            <hr/>
            <VideoRow
            views="1.5m"
            
            />

            
            
        </div>
    )
}

export default SearchPage
