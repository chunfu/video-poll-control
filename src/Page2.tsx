import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import video5 from "./assets/Live+.mov";
import Button from "./Button";

const content = `
請先觀賞下方的一分鐘影片。

`;

interface PageProps {
  onClick: () => void;
}

const Page2: React.FC<PageProps> = ({ onClick }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto flex flex-col px-5 py-5 justify-center items-stretch">
      <div className="prose">
        <Markdown>{content}</Markdown>
      </div>
      <video
        className="w-full h-1/3 my-5 object-contain object-center rounded"
        src={video5}
        autoPlay
        playsInline
      />
      <Button onClick={onClick} disabled={isButtonDisabled}>
        繼續填答
      </Button>
    </div>
  );
};

export default Page2;
