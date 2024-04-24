import { MutableRefObject, useRef } from "react";
import Navbar, { NavItem } from "../components/Navbar/Navbar";

const HomePage = () => {
  const home = useRef<HTMLElement | null>(null);
  const projects = useRef<HTMLElement | null>(null);
  const about = useRef<HTMLElement | null>(null);
  const contact = useRef<HTMLElement | null>(null);

  const scrollToSection = (navItem: MutableRefObject<HTMLElement | null>) => {
    if (navItem.current) {
      console.log(navItem, "navitem");
      navItem.current.focus();
    }
  };

  // const homeItem = useRef(null)
  return (
    <div className="max-w-[1160px] mx-auto ">
      <div className="h-screen p-4 md:p-6">
        <Navbar
          home={home}
          projects={projects}
          about={about}
          contact={contact}
          scrollToSection={scrollToSection}
        />
        {/* Make these sections be the parent prop of the navbar's links */}
        <div className="flex justify-center items-center h-full text-center">
          <section ref={home}>
            {/* Hero Section */}
            <div className="">
              <p className="font-extrabold text-[3.9rem]">
                &#128075;Kumusta! I'm{" "}
                <span className="text-rose">Dominique</span>
              </p>
              <p className=" text-[1.4rem]">
                An enthusiastic individual with an interest in{" "}
                <span className="text-sun">front-end development</span>
                <br></br>now transitioning into full-stack development
              </p>

              {/* Get in touch */}
              <div className="my-24">
                <p className=" text-lg text-gray-400">
                  &#128233; Let's get in touch!&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="border-b-4 border-sun">
                    nikkibonifacio184@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section ref={projects}></section>
      <section ref={about}></section>
      <section ref={contact}></section>
    </div>
  );
};

export default HomePage;
