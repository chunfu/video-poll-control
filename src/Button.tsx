import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  // other props originated from HTMLButtonElement
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50 disabled:pointer-events-none"
    >
      {children}
    </button>
  );
};

export default Button;
