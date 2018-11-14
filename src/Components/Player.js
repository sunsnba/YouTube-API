import React from 'react';


  const Player = ({video}) => {
    
    if(!video) {return <h1> Loading...</h1>}

    const videoId = video.id.videoId
    const url = 'https://www.youtube.com/embed/'+ videoId;


    return (
     <div>
       <iframe src={url} > </iframe>
       <div>{video.snippet.title}</div>
       <div>{video.snippet.description}</div>
     </div>
    )
  }    

export default Player;