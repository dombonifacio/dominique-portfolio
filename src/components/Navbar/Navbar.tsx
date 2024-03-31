import { MutableRefObject } from "react";

interface NavItemProps {
  home: MutableRefObject<HTMLElement | null>;
  projects: MutableRefObject<HTMLElement | null>;
  about: MutableRefObject<HTMLElement | null>;
  contact: MutableRefObject<HTMLElement | null>;
  // NavItem is a ref ob ject for the parrameter scrollToSection
  scrollToSection: (navItem: MutableRefObject<HTMLElement | null>) => void;
}

export interface NavItem {
  ref: MutableRefObject<HTMLElement | null>;
  name: string;
}

const Navbar = ({
  home,
  projects,
  about,
  contact,
  scrollToSection,
}: NavItemProps) => {
  const items: NavItem[] = [
    {
      ref: home,
      name: "Home",
    },
    {
      ref: projects,
      name: "Projects",
    },
    {
      ref: about,
      name: "About",
    },
    {
      ref: contact,
      name: "Contact",
    },
  ];
  
  return (
    <nav>
      <ul className="flex justify-center gap-x-10">
        {items.map((navItem) => (
          // The parameter of the scrollToSection will point to a ref (nav item)
          <li><button onClick={() => scrollToSection(navItem.ref)}>{navItem.name}</button></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
