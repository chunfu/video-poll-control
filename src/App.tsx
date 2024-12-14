import { useState } from "react";
import video1 from "./assets/1.mp4";
import video2 from "./assets/2.mp4";
import video3 from "./assets/3.mp4";
import "./App.css";

const videos = [
  { id: 1, description: "視角 1", src: video1 },
  { id: 2, description: "視角 2", src: video2 },
  { id: 3, description: "視角 3", src: video3 },
];

function App() {
  const [focusedVideoSrc, setFocusedVideoSrc] = useState<string>("");

  const handleVideoClick = (index: number) => {
    setFocusedVideoSrc(videos[index].src);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <video
          className="w-auto h-[500px] mb-5 object-contain object-center rounded"
          src={focusedVideoSrc}
          controls
          autoPlay
        />
        <div className="flex space-x-2 w-full justify-center items-end mb-5">
          {videos.map((video, index) => (
            <div key={video.id} className="flex flex-col items-center flex-1">
              <video
                className="w-auto max-h-[200px] h-auto mb-5 object-contain object-center rounded"
                src={video.src}
                controls
                autoPlay
                muted
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
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <p className="mb-8 leading-relaxed">
            說明文字說明文說明文字說明文說明文字說明文說明文字說明文字字字字說明文字說明文字
            說明文字說明文說明文字說明文說明文字說明文說明文字說明文字字字字說明文字說明文字
            說明文字說明文說明文字說明文說明文字說明文說明文字說明文字字字字說明文字說明文字
          </p>
          <div className="flex flex-col space-y-2 w-full justify-center items-end">
            <div className="relative w-full text-left">
              <label
                htmlFor="select-field"
                className="leading-7 text-sm text-gray-600"
              >
                最愛哪個視角
              </label>
              <select
                id="select-field"
                className="w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
              >
                <option selected disabled>請選擇</option>
                <option>視角 1</option>
                <option>視角 2</option>
                <option>視角 3</option>
              </select>
              <span className="absolute right-0 top-4 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <div className="relative w-full text-left">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative w-full text-left">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Neutra shabby chic ramps, viral fixie.
          </p>
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
