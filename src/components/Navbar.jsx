import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    display: "home",
  },
  {
    id: 2,
    display: "about",
  },
  {
    id: 3,
    display: "projects",
  },
  {
    id: 4,
    display: "experiences",
  },
  {
    id: 5,
    display: "contacts",
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Adnan</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            {link.display}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
