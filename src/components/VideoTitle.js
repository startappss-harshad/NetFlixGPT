import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/2 text-white">{overview}</p>
      <div className="">
        <button className="bg-white font-bold text-lg p-2 px-12 mx-2 cursor-pointer rounded-lg border text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-white font-bold text-lg p-2 px-6 mx-2 cursor-pointer rounded-lg border text-black hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
