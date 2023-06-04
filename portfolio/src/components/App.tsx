import { useRef, useCallback } from "react";

import { FooterParagraph } from "./modular/Paragraphs";
import { SplashText } from "./sections/SplashText";
import { Experience } from "./sections/Experience";
import { Masthead } from "./sections/Masthead";

import LinkList from "./modular/LinkList";
import Socials from "./sections/Socials";
import Projects from "./sections/Projects";

import ".././styles/App.css";

//from-[#00032c] to-[#1e202e]
const App: React.FC = () => {
  const myRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const registerRef = useCallback((id: string) => {
    return (ref: HTMLDivElement) => {
      myRefs.current[id] = ref;
    };
  }, []);

  const handleMenuClick = (id: string) => {
    console.log(id);
    myRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle: string = "text-slate-100 underline hover:text-teal-500";

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#00032c] to-[#282a3e] lg:flex">
      <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:overflow-auto lg:px-24 lg:py-0 xl:ml-36">
        <Masthead />
        <div className="hidden lg:block">
          <LinkList handleMenuClick={handleMenuClick} />
          <Socials />
        </div>
      </div>
      <div className="mx-auto mb-24 max-w-screen-xl space-y-8 px-6 py-12 font-sans md:px-12 md:py-20 lg:w-1/2 lg:px-24 lg:py-0 xl:mr-36">
        <div ref={registerRef("about")}>
          <SplashText />
        </div>
        <div ref={registerRef("experience")}>
          <Experience />
        </div>
        <div ref={registerRef("projects")}>
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
          , hosted on GitHub, and crafted with love.
        </FooterParagraph>
      </div>
    </div>
  );
};

export default App;
