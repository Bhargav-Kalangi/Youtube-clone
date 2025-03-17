import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);
  if (!isMenu) return;
  return (
    <div className="p-5 w-48 shadow-lg">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <hr />
        </ul>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcast</li>
        </ul>
      </div>
      <hr />
      <div>
        <h3>More from YouTube</h3>
        <ul>
          <li>YouTube Premium</li>
          <li>YouTube Music</li>
          <li>YouTube Studio</li>
          <li>YouTube Kids</li>
          <hr />
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
