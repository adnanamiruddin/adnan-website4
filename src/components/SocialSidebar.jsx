import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

const menuList = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/muh-adnan-putra-amiruddin/",
    style: "rounded-tr-lg",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/adnanamiruddin",
  },
  {
    id: 3,
    child: (
      <>
        Email <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:adnan.amiruddin34@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Instagram <BsInstagram size={30} />
      </>
    ),
    href: "https://www.instagram.com/muh.adnan_putra/",
    style: "rounded-br-lg",
  },
];

const SocialSidebar = () => {
  return (
    <div className="flex-col top-[40%] left-0 fixed hidden xl:flex">
      <ul>
        {menuList.map((menu) => (
          <li
            key={menu.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-700 hover:rounded-md hover:ml-[-5px] duration-500" +
              " " +
              menu.style
            }
          >
            <a
              href={menu.href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {menu.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSidebar;
