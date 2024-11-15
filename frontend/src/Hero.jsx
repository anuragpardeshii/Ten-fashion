import { useState } from "react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      src: "https://cdn.prod.website-files.com/6321ebecf9b0d72298007f94/654125265ba737c243db106e_CGI%20in%20Fashion%20Online-Shopping%20%26%20Fashion%20Influencer-4.webp",
      title: "Street fashion not only for the street",
      buttonText: "Shop now",
    },
    {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Embrace the new fashion trends",
      buttonText: "Explore",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQFSHH4Q4ZUcWw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728569016789?e=2147483647&v=beta&t=FAVkBxcwMBP1HbhPADF1rLccBN5pQ0He9FVvjwlZVII",
      title: "Innovative fashion for everyone",
      buttonText: "Discover",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="indicators-carousel" className="relative w-full h-[80vh]">
      <div className="relative overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src={item.src}
              className="relative block w-full h-[80vh]"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <button className="mt-4 px-6 py-2 text-lg font-medium bg-blue-500 rounded">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
