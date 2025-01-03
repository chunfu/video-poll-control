import React from "react";
import Button from "./Button";

interface PageProps {
  onClick: () => void;
}

const Page1: React.FC<PageProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Welcome Text</p>
      <Button
        onClick={onClick}
      >
        下一頁
      </Button>
    </div>
  );
};

export default Page1;
