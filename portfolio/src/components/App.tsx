import { DividerHeader } from "./Titles";
import { ProjectPreview } from "./ProjectPreview";
import { SplashText } from "./SplashText";
import { Experience } from "./Experience";
import { Masthead } from "./Masthead";

import unearth from "../static/images/unearth.png";
import ".././styles/App.css";
import LinkList from "./LinkList";
import Socials from "./Socials";
import { FooterParagraph } from "./Paragraphs";

/*
TODO: 
  - Make padding global and responsive
  - Create static texts for each job description
  - Symbols: [Σ for resume, λ for About, ∈ for work experience, ∩ for collaborations] ...
  - Make project previews a link
  - Make project previews and work experience have a glass effect on hover
*/

/*
SECTIONS:
  - Masthead title
  - About
  - Work Experience [Experience]
  - Personal Projects  
  - Collaborations
  - Resumé link [Resume]
  - Contact
*/

// Written in TypeScript, styled with Tailwind, hosted on GitHub, and made with love.

//from-[#00032c] to-[#201f21]
const App: React.FC = () => {

  const linkStyle: string = "text-slate-100 underline hover:text-teal-500"

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#00032c] to-[#1e202e] lg:flex">
      <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:overflow-auto lg:px-24 lg:py-0 xl:ml-36">
        <Masthead />
        <div className="hidden lg:block">
          <LinkList />
          <Socials />
        </div>
      </div>
      <div className="mx-auto mb-24 max-w-screen-xl space-y-8 px-6 py-12 font-sans md:px-12 md:py-20 lg:w-1/2 lg:px-24 lg:py-0 xl:mr-36">
        <SplashText />
        <Experience />
        <DividerHeader text={"Projects"} />
        <ProjectPreview
          imgSrc={unearth}
          title={"seamcarve"}
          description={"Lorem ipsum dolor sit amet..."}
        />

        <DividerHeader text={"Collaborations"} />
        <ProjectPreview
          imgSrc={unearth}
          title={"Niko4969 - UN:EARTH"}
          description={"Lorem ipsum dolor sit amet..."}
        />
        <div className="block sm:hidden">
          <Socials />
        </div>
        <FooterParagraph>
          Written in <a className={linkStyle} href={"https://www.typescriptlang.org/"}>TypeScript</a>,
          built with <a className={linkStyle} href="https://react.dev/">React</a>, styled with{" "}
          <a className={linkStyle} href="https://tailwindcss.com/">tailwindcss</a>, hosted on GitHub,
          and crafted with love.
        </FooterParagraph>
      </div>
    </div>
  );
};

export default App;
