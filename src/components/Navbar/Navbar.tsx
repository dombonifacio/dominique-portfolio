import { MutableRefObject, ReactNode, useState } from "react";

// icons
import { IoMdClose } from "react-icons/io";
import { TbTools } from "react-icons/tb";
import { TbAxe } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import Logo from "./Logo/Logo";

interface NavItemProps {
  
  skills: MutableRefObject<HTMLElement | null>;
  projects: MutableRefObject<HTMLElement | null>;
  about: MutableRefObject<HTMLElement | null>;

  // NavItem is a ref ob ject for the parrameter scrollToSection
  scrollToSection: (navItem: MutableRefObject<HTMLElement | null>) => void;
}

export interface NavItem {
  ref: MutableRefObject<HTMLElement | null>;
  name: string;
  icon?: ReactNode;
}

const Navbar = ({
 
  skills,
  projects,
  about,

  scrollToSection,
}: NavItemProps) => {
  const items: NavItem[] = [
  
    {
      ref: skills,
      name: "Skills",
      icon: <TbTools />
    },
    {
      ref: projects,
      name: "Projects",
      icon: <TbAxe />
    },
    {
      ref: about,
      name: "About",
      icon: <TbUser />
    },
   
  ];

  const [ showMenu, setShowMenu ] = useState<boolean>(false)

  return (
    <nav className="w-full">
      <div
        className={`${showMenu ? "bg-[#010613] absolute w-full  p-6 md:hidden" : ""}`}
      >
        <div className={`${showMenu ? "flex justify-end" : "hidden"}`}>
          <button className="mb-2" onClick={() => setShowMenu(false)}>
            <IoMdClose className="text-[1.7rem] hover:text-gray-400 duration-75" />
          </button>
        </div>
        <div
          className={`${
            showMenu ? "flex items-center justify-between h-full" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-y-6  w-full h-full ">
            {items.map((navItem) => (
              // The parameter of the scrollToSection will point to a ref (nav item)

              <li className="text-2xl hover:text-gray-400 duration-75 font-semibold md:text-lg md:block ">
                <button
                  className="flex items-center gap-x-2"
                  onClick={() => scrollToSection(navItem.ref)}
                >
                  {navItem?.icon}
                  {navItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`${
          showMenu ? "hidden md:flex md:gap-x-10 justify-between p-6" : "flex gap-x-10 justify-between p-6 "
        }`}
      >
        <Logo />
        <ul className=" hidden md:flex items-center gap-x-4">
          {items.map((navItem) => (
            // The parameter of the scrollToSection will point to a ref (nav item)

            <li className=" font-semibold md:text-lg ">
              <button onClick={() => scrollToSection(navItem.ref)}>
                {navItem.name}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowMenu(true)} className="md:hidden">
          <svg
            className="rotate-180 group-data-[active=true]:hidden"
            width="24"
            height="24"
            stroke-width="1.7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M3 5h8M3 12h13M3 19h18"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
