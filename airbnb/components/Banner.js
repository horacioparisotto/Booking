import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Banner() {
  const [cityImageIndex, setCityImageIndex] = useState(0);

  const cityImages = [
    "https://i.imgur.com/6WsynNT.jpeg",
    "https://i.imgur.com/i4AsEAw.jpeg",
    "https://i.imgur.com/fKOUArE.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCityImageIndex((prevIndex) =>
        prevIndex === cityImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [cityImages]);

  const router = useRouter(); // Initialize the useRouter hook outside of the functional component

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Define the handleFlexibleButtonClick function
  const handleFlexibleButtonClick = () => {
    const locations = [
      "New York City", "Bangkok", "Los Angeles", "Cape Town", "Buenos Aires", "Rio de Janeiro", "Marrakech"
    ];
    // Navigate to the search page and pass the random location as a query parameter
    router.push({
      pathname: "/search", // Pathname of the search page
      query: { location: locations[randomInteger(0, locations.length - 1)] },
    });
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      {/* Rendering the image */}
      <Image
        src={cityImages[cityImageIndex]}
        layout="fill"
        objectFit="cover"
        objectPosition="20% 30%"
      />
      <div className="absolute top-1/2 w-full text-center">
        <button
          className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
          onClick={handleFlexibleButtonClick}
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
