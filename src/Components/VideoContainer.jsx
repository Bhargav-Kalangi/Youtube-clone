import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const AdWrappedVideoCard = AdVideoCard(VideoCard);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const Json = await data.json();
    // console.log(Json.items);
    setVideos(Json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {video.statistics.likeCount < 30000 ? (
            <AdWrappedVideoCard info={video} />
          ) : (
            <VideoCard info={video} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
