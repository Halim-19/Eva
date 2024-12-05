// src/LandingPage/Component/NavBra/Navbar.tsx
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import useScrollTo from "../../../ScrollTo";

const tabs = ["Home", "Guid", "About", "Contact"];
const links = ["home", "guid", "aboutUs", "contact"]; // Ensure these IDs match your component IDs

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const { scrollTo } = useScrollTo(); // Use the custom hook

  return (
    <div className="fixed z-10 w-full top-0 left-0 px-4 py-3 bg-russian-violet/30 backdrop-blur-md flex items-center justify-between flex-wrap gap-2">
      <h1 className="text-white text-lg font-bold  ">
        <span className="text-[#0098C4]">Eva</span>Easy
      </h1>
      <div className="flex items-center justify-between flex-wrap md:gap-2 md:px-4 md:py-3 px-1 py-1">
        {tabs.map((tab, index) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            link={links[index]} // Pass the corresponding link
            scrollTo={scrollTo} // Pass the scrollTo function
            key={tab}
          />
        ))}
      </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  link,
  scrollTo, // Receive scrollTo function as a prop
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  link: string;
  scrollTo: (id: string) => void; // Define the scrollTo function type
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    setSelected(text); // Set selected tab
    scrollTo(link); // Use the scrollTo function from the hook
  };

  return (
    <a
      href={`#${link}`} // Use anchor tag for navigation with hash
      onClick={handleClick}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </a>
  );
};

export default ChipTabs;
