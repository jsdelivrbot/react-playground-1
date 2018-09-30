import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="col-lg-4">
      <p className="lead more-videos">More Videos</p>
      <ul className="video-list">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
