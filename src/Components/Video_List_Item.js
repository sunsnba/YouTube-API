import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return <li onClick={ ()=> onVideoSelect(video)} >
             <div>
                <img src={imageURL} />
                <div>
                    {video.snippet.title}
                </div>
             </div>

        </li>


}

export default VideoListItem;