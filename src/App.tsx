import { useState } from "react";
import video1 from "./assets/1.mp4";
import video2 from "./assets/2.mp4";
import "./App.css";

const videos = [
  { id: 1, description: "視角 1", src: video1 },
  { id: 2, description: "視角 2", src: video2 },
  { id: 3, description: "視角 3", src: video2 },
  { id: 4, description: "視角 4", src: video1 },
  { id: 5, description: "視角 5", src: video1 },
];

function App() {
  const [focusedVideoSrc, setFocusedVideoSrc] = useState<string>("");

  const handleVideoClick = (index: number) => {
    setFocusedVideoSrc(videos[index].src);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-center">
        <video
          className="w-full h-1/3 mb-5 object-contain object-center rounded"
          src={focusedVideoSrc}
          controls
          autoPlay
          playsInline
        />
        <div className="flex flex-wrap space-x-2 space-y-3 w-full justify-center items-end mb-5">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="flex flex-col items-center basis-[calc(50%-10px)]"
            >
              <video
                className="w-auto max-h-[200px] h-auto mb-1 object-contain object-center rounded"
                src={video.src}
                controls
                autoPlay
                muted
                playsInline
              />
              <button
                onClick={() => handleVideoClick(index)}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {video.description}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <iframe
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            src="https://www.surveycake.com/s/323yN"
            allowTransparency={true}
            className="w-full sm:h-[130vh] max-sm:h-[170vh] border border-[#ddd]"
          >
            載入中…
          </iframe>
        </div>
      </div>
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
