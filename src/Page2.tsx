import { useEffect, useState } from "react";
import video1 from "./assets/1.mp4";
import video2 from "./assets/2.mp4";
import Button from "./Button";

const videos = [
  { id: 1, description: "視角 1", src: video1 },
  { id: 2, description: "視角 2", src: video2 },
  { id: 3, description: "視角 3", src: video2 },
  { id: 4, description: "視角 4", src: video1 },
  { id: 5, description: "視角 5", src: video1 },
];

interface PageProps {
  onClick: () => void;
}

const Page2: React.FC<PageProps> = ({ onClick }) => {
  const [focusedVideoSrc, setFocusedVideoSrc] = useState<string>("");

  const handleVideoClick = (index: number) => {
    setFocusedVideoSrc(videos[index].src);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-center">
      <video
        className="w-full h-1/3 mb-5 object-contain object-center rounded"
        src={focusedVideoSrc}
        autoPlay
        playsInline
      />
      <div className="flex flex-wrap w-full justify-center items-end mb-5">
        {videos.map((video, index) => (
          <video
            key={video.id}
            className="w-1/2 max-h-[200px] h-auto mb-1 object-contain object-center rounded"
            src={video.src}
            autoPlay
            muted
            playsInline
            onClick={() => handleVideoClick(index)}
          />
        ))}
      </div>
      <Button onClick={onClick} disabled={isButtonDisabled}>
        下一頁
      </Button>
    </div>
  );
};

export default Page2;
