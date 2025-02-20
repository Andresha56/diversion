import { ChatIcon } from "./Navbar";

export const ChatButton = () => {
    return (
      <button className="flex fixed bottom-10 left-10 justify-center items-center bg-indigo-600 rounded-full h-[90px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] w-[90px]">
        <ChatIcon/>
      </button>
    );
  };