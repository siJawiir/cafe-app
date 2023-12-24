import React from "react";

interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="animate-spin rounded-full border-t-4 border-white border-opacity-25 h-16 w-16 z-10"></div>
    </div>
  );
};

export default Loading;
