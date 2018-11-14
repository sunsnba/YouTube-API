import React from 'react';
import VideoListItem from './Video_List_Item';

const VideoList = (props)=> {

    const videoItem = props.videos.map((video) => {
        return <VideoListItem onVideoSelect={props.onVideoSelectedVideo} key={video.etag} video={video} />
    });

    return (
        <ul>
            {videoItem}
        </ul>
    );
}

export default VideoList;