
import React from "react";

export const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="w-[42px] h-[38px] flex items-center justify-center"
      aria-label="Go back"
    >
      <svg
        width="42"
        height="38"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="20.6064" cy="19" rx="20.6064" ry="19" fill="white" />
        <path
          d="M6.88473 18.2929C6.4942 18.6834 6.4942 19.3166 6.88473 19.7071L13.2487 26.0711C13.6392 26.4616 14.2724 26.4616 14.6629 26.0711C15.0534 25.6805 15.0534 25.0474 14.6629 24.6569L9.00604 19L14.6629 13.3431C15.0534 12.9526 15.0534 12.3195 14.6629 11.9289C14.2724 11.5384 13.6392 11.5384 13.2487 11.9289L6.88473 18.2929ZM7.59183 20L32.5364 20V18L7.59183 18V20Z"
          fill="black"
        />
      </svg>
    </button>
  );
};
