import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import halimImg from "/halim.png";
import senoireImg from "/senoire.png";
import khabibislamImg from "/khabib&islam.png";
import basterdImg from "/basterd.jfif";
import hamzaImg from "/hamza.png";
import slimaniImg from "/slimani.png";

const AboutUS = () => {
  return (
    <section
      id="aboutUs"
      className="w-full px-6 md:px-16 lg:px-32 py-12 md:py-16 text-white bg-gradient-to-bl from-[#080220] via-[#120934] to-[#1a093d] grid grid-cols-1 md:grid-cols-2 items-center gap-6"
    >
      <div>
        <h1 className="text-3xl">About Us</h1>
        <span className="block mb-3 text-sm text-indigo-500 font-medium">
          Meet Our Team
        </span>
        <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
          Behind the Platform
        </h3>
        <p className="text-sm md:text-base my-3">
          A team of creative minds committed to delivering excellence.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 mt-4">
          Join Us
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: halimImg,
  },
  {
    id: 2,
    src: senoireImg,
  },
  {
    id: 3,
    src: khabibislamImg,
  },
  {
    id: 4,
    src: basterdImg,
  },
  {
    id: 5,
    src: hamzaImg,
  },
  {
    id: 6,
    src: slimaniImg,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = memo(() => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
});

export default AboutUS;
