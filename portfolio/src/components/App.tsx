import { useRef, useCallback, useState } from "react";

import { FooterParagraph } from "./modular/Paragraphs";
import { SplashText } from "./sections/SplashText";
import { Experience } from "./sections/Experience";
import { Masthead } from "./sections/Masthead";

import LinkList from "./sections/LinkList";
import Socials from "./sections/Socials";
import Projects from "./sections/Projects";

import ".././styles/index.css";
import ".././styles/App.css";

const App: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState("");

  const handleHover = (section: string) => {
    setHoveredSection(section);
  };

  const myRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const registerRef = useCallback((id: string) => {
    return (ref: HTMLDivElement) => {
      myRefs.current[id] = ref;
    };
  }, []);

  const handleMenuClick = (id: string) => {
    myRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle: string = "text-slate-100 underline hover:text-teal-500";

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#00032c] to-[#3e4160] lg:flex">
      <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:overflow-auto lg:px-24 lg:py-0 xl:ml-36">
        <Masthead />
        <div className="hidden lg:block">
          <LinkList
            handleMenuClick={handleMenuClick}
            hoveredSection={hoveredSection}
          />
          <Socials />
        </div>
      </div>

      <div className="mx-auto mb-24 max-w-screen-xl space-y-8 px-6 py-12 font-sans md:px-12 md:py-20 lg:w-1/2 lg:px-24 lg:py-0 xl:mr-36">
        <div
          ref={registerRef("about")}
          onMouseEnter={() => handleHover("about")}
          onMouseLeave={() => setHoveredSection("")}
        >
          <SplashText />
        </div>

        <div
          ref={registerRef("experience")}
          onMouseEnter={() => handleHover("experience")}
          onMouseLeave={() => setHoveredSection("")}
        >
          <Experience />
        </div>

        <div
          ref={registerRef("projects")}
          onMouseEnter={() => handleHover("projects")}
          onMouseLeave={() => setHoveredSection("")}
        >
          <Projects />
        </div>

        <div className="block sm:hidden">
          <Socials />
        </div>
        <FooterParagraph>
          Written in{" "}
          <a className={linkStyle} href={"https://www.typescriptlang.org/"}>
            TypeScript
          </a>
          , built with{" "}
          <a className={linkStyle} href="https://react.dev/">
            React
          </a>
          , styled with{" "}
          <a className={linkStyle} href="https://tailwindcss.com/">
            tailwindcss
          </a>
          , hosted on{" "}
          <a
            className={linkStyle}
            href="https://github.com/NTaylor23/NTaylor23.github.io"
          >
            Github
          </a>
          , and crafted with love.
        </FooterParagraph>
      </div>
    </div>
  );
};

export default App;
