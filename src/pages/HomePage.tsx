import { MutableRefObject, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import ToolIcon from "../components/Icons/ToolIcon";

const HomePage = () => {
  const projects = useRef<HTMLElement | null>(null);
  const about = useRef<HTMLElement | null>(null);

  const skills = useRef<HTMLElement | null>(null);

  const scrollToSection = (navItem: MutableRefObject<HTMLElement | null>) => {
    if (navItem.current) {
      console.log(navItem, "navitem");
      navItem.current.focus();
    }
  };

  // const homeItem = useRef(null)
  return (
    <div className=" mx-auto relative max-w-[960px]  ">
      <Navbar
        skills={skills}
        projects={projects}
        about={about}
        scrollToSection={scrollToSection}
      />

      <div className="h-screen p-6 md:p-8">
        <div className="flex justify-center items-center h-full text-center ">
        
          <div className="">
            <p className="font-extrabold text-[2.8rem] lg:text-[3.8rem] leading-[2.8rem] lg:leading-[5rem]">
              &#x1F469;&#x200D;&#x1F4BB;Kumusta! I'm{" "}
              <span className="text-rose">Dominique</span>
            </p>
            <p className="text-xl leading-lg:text-[1.6rem] mt-6 lg:text-[1.4rem] lg:mt-0">
              An enthusiastic individual with an interest in{" "}
              <span className="text-sun">front-end development</span>
              <br className="hidden lg:block"></br>&nbsp;now transitioning into
              full-stack development
            </p>

            <div className="my-24">
              <p className=" md:text-lg  text-gray-400">
                &#128233; Let's get in touch!&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="border-b-4 border-sun">
                  nikkibonifacio184@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section ref={skills}>
        <div className=" ">
          
          <Title />
          
          <div className="">
            <ToolIcon />
          </div>
        </div>
      </section>
      <section ref={projects}></section>
      <section ref={about}></section>
    </div>
  );
};

export default HomePage;
