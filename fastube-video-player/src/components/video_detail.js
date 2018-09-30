import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-lg-8">
      <div className="embed-responsive embed-responsive-16by9 youtube-video-container">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <p className="lead channel-title">{video.snippet.channelTitle}</p>
        <p className="text-muted">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
