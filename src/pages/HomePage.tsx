import { MutableRefObject, useRef } from "react";
import Navbar, { NavItem } from "../components/Navbar/Navbar";

const HomePage = () => {
  const home = useRef<HTMLElement | null>(null);
  const projects = useRef<HTMLElement | null>(null);
  const about = useRef<HTMLElement | null>(null);
  const contact = useRef<HTMLElement | null>(null);
  
  const scrollToSection = (navItem: MutableRefObject<HTMLElement | null>) => {
    if (navItem.current) {
      console.log(navItem, 'navitem')
      navItem.current.focus()
    }
  };
  
  
  // const homeItem = useRef(null)
  return (
    <div className="max-w-[1260px] mx-auto text-center">
      <Navbar
        home={home}
        projects={projects}
        about={about}
        contact={contact}
        scrollToSection={scrollToSection}
      />
      {/* Make these sections be the parent prop of the navbar's links */}

      <section ref={home}></section>
      <section ref={projects}></section>
      <section ref={about}></section>
      <section ref={contact}></section>
    </div>
  );
};

export default HomePage;
