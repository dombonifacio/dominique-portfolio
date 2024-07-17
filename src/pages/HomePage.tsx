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
      navItem.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const homeItem = useRef(null)
  return (
    <>
      <div className="top-[70%] fixed h-[100vh]  px-4 flex flex-col items-center gap-y-2 ">
        <ul className="flex flex-col gap-y-4">
          {/* LinkedIn */}
          <li className="p-2 rounded-full ">
            <svg
              width="34"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0A66C2"
                  d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                ></path>
              </g>
            </svg>
          </li>
          <li className=" p-2 rounded-full ">
            <svg
              width="34"
              
              viewBox="0 -0.5 24 24"
              id="meteor-icon-kit__regular-github"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                  fill="#758CA3"
                ></path>
              </g>
            </svg>
          </li>
        </ul>
        <div className="w-1 h-full bg-rose"></div>
      </div>
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
                <br className="hidden lg:block"></br>&nbsp;Browse through my
                work and let's build amazing things together!
              </p>

              <div className="my-24">
                <p className=" md:text-lg  text-gray-400">
                  &#128233; Let's get in touch!&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <span className="border-b-4 border-sun">
                  nikkibonifacio184@gmail.com
                </span> */}
                  <a
                    href="mailto:nikkibonifacio184@gmail.com"
                    className="border-b-4 border-sun hover:border-yellow-600 duration-100"
                  >
                    nikkibonifacio184@gmail.com
                  </a>
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
        {/* About Me */}
        <section ref={about} className="px-6 scroll-m-20 ">
          <Title title="About" />
          <div className="py-6 gap-y-4 sm:py-8 flex flex-col-reverse sm:flex-row sm:flex items-center gap-x-4">
            {/* About Me Paragraphs */}
            <div className="basis-2/3 ">
              <p className="text-vader  ">
                Greetings! I’m Dominique Bonifacio. I have a year and a half of
                experience in web development, mostly in front-end development.
              </p>
              <p className="text-vader  ">
                <br />
                I've gained proficient skills in HTML/CSS, Typescript, and
                ReactJS. Along the way, I'm practicing back-end development as
                well as exploring new technologies.
              </p>
              &nbsp;
              <p className="text-vader ">
                <span className="text-sun  ">When I'm not coding,</span> I like
                to play the GUITAR!! Play video games, snowboarding, and to
                cook! (still a newbie &#128514;)
              </p>
            </div>
            {/* Memoji Image of me */}
            <div className="w-full basis-1/3">
              <img
                src="https://i.imgur.com/pYp2PJR.png"
                className="h-48 w-64 sm:w-72 sm:h-56  md:h-64 md:w-64 object-cover mx-auto "
              ></img>
            </div>
          </div>
        </section>

        <footer className="">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <hr className="my-6 border-gray-500 sm:mx-auto  " />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © Dominique Bonifacio 2024. All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
