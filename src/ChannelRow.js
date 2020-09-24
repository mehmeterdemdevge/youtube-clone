import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image,channel, subs,description,verified,noOfVideos}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel} src={image}
            />
            <div className="channelRow__text">
            <h4>{channel} {verified&&<VerifiedIcon/>}</h4>


            </div>
            <p>{subs} subscribers {noOfVideos} </p>
            <p>{description}</p>
            
        </div>
    )
}

export default ChannelRow
