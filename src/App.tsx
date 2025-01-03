import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "./App.css";


function App() {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handlePageChange = (index: number) => {
    setPageIndex(index);
  };

  const pageList = [
    <Page1 onClick={() => handlePageChange(1)} />,
    <Page2 onClick={() => handlePageChange(2)} />,
    <Page3 />,
  ]

  return (
    <section className="text-gray-600">
      {pageList[pageIndex]}
    </section>
  );

  /*
  return (
    <div className="video-container">
      {focusedVideoSrc && <video src={focusedVideoSrc} controls />}
      {videos.map((video, index) => (
        <button
          key={video.id}
          onClick={() => handleVideoClick(index)}
        >
          {video.id}
        </button>
      ))}
    </div>
  );
  */
}

export default App;
