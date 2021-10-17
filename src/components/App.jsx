import React, { useState, useEffect } from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideosList";
import VideoDetail from "./VideoDetail";
import "../styles/index.scss";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Music");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("./search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <Search onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
