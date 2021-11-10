import React, { useState, useEffect } from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideosList";
import VideoDetail from "./VideoDetail";
import "../styles/index.scss";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <Search onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
