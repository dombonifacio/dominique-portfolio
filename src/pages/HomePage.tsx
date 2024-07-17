import { MutableRefObject, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import ToolIcon from "../components/Skills/icons/ToolIcon";
import SkillsContainer from "../components/Skills/layout/SkillsContainer";
import ProjectsContainer from "../components/Projects/layout/ProjectsContainer";

const HomePage = () => {
  const projects = useRef<HTMLElement | null>(null);
  const about = useRef<HTMLElement | null>(null);

  const skills = useRef<HTMLElement | null>(null);

  const scrollToSection = (navItem: MutableRefObject<HTMLElement | null>) => {
    if (navItem.current) {
      console.log(navItem.current, "navitem");
      navItem.current.scrollIntoView({behavior:"smooth"});
    }
  };

  // const homeItem = useRef(null)
  return (
    <div className=" mx-auto relative max-w-[1000px]  ">
      <Navbar
        skills={skills}
        projects={projects}
        about={about}
        scrollToSection={scrollToSection}
      />

      <div className="h-screen p-6 ">
        <div className="flex justify-center items-center h-full text-center ">
          <div className="">
            <p className="font-extrabold text-[2.8rem] lg:text-[3.8rem] leading-[2.8rem] lg:leading-[5rem]">
              &#x1F469;&#x200D;&#x1F4BB;Kumusta! I'm{" "}
              <span className="text-rose">Dominique</span>
            </p>
            <p className="text-xl leading-9 :text-[1.6rem] mt-6 lg:text-[1.4rem] lg:mt-0">
              An enthusiastic individual with an interest in{" "}
              <span className="text-sun">front-end development</span>
              <br className="hidden lg:block"></br>&nbsp;Browse through my work
              and let's build amazing things together!
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

      <section ref={skills} className="px-6 scroll-m-20">
        <Title title="Skills" />

        <SkillsContainer>
          <ToolIcon />
        </SkillsContainer>
      </section>
      <section ref={projects} className="px-6 mt-14 scroll-m-20">
        <Title title="Projects" />
        <div className="py-10">
          <ProjectsContainer />
        </div>
      </section>
      <section ref={about} className="px-6 scroll-m-20 ">
        <Title title="About" />
        <div className=" py-8 flex items-center gap-x-4">
          {/* About Me Paragraphs */}
          <div className="">
            <p className="text-vader  ">
              Greetings! I’m Dominique Bonifacio. I have a year and a half of
              experience in web development, mostly in front-end development.
            </p>
            <p className="text-vader  ">
              <br />
              I've gained proficient skills in HTML/CSS, Typescript, and
              ReactJS. Along the way, I’m exploring new technologies, back-end
              development, practicing Node.js and Flask and plan to transition
              into full-stack web development in the future!
            </p>
            &nbsp;
            <p className="text-vader ">
              <span className="text-sun  ">
                When I'm not coding,
              </span>{" "}
              I like to play the GUITAR!!, play video games, snowboarding, and
              to cook! <p>(still a newbie &#128514;)</p>
            </p>
          </div>
          {/* Memoji Image of me */}
          <div className="w-full">
            <img
              src="https://i.imgur.com/x6GO3Nf.png"
              className="h-64 w-72 object-cover scale-x-[-1]"
            ></img>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default HomePage;
