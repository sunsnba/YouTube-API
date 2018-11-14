import React from 'react';
import VideoListItem from './Video_List_Item';

const VideoList = (props)=> {
        console.log(props.videos, 'props.videos')
    const videoItem = props.videos.map((video) => {
        return <VideoListItem onVideoSelect={props.onSelectedVideo} key={video.etag} video={video} />
    });

    return (
        <ul>
            {videoItem}
        </ul>
    );
}

export default VideoList;