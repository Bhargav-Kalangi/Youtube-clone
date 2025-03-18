import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-2xl">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2 text-wrap">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

//HOC

export const AdVideoCard = (VideoCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-3 m-3 rounded-lg">
          Top rated
        </label>
        <VideoCard {...props} />
      </div>
    );
  };
};

export default VideoCard;
