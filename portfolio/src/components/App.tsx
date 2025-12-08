import { useRef, useCallback, useState, type FC, type ReactNode } from "react";

import { SplashText } from "./sections/SplashText";
import { Experience } from "./sections/Experience";
import { Masthead } from "./sections/Masthead";
import { Contact } from "./sections/Contact";
import { LinkList } from "./sections/LinkList";
import { Projects } from "./sections/Projects";
import { Socials } from "./sections/Socials";

import ".././styles/index.css";
import ".././styles/App.css";
import "../styles/fonts.css";

// Constants for section identifiers
const SECTIONS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
} as const;

type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

// Custom hook for section navigation and hover management
function useSectionNavigation() {
  const [hoveredSection, setHoveredSection] = useState<SectionId | "">("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const registerRef = useCallback((id: SectionId) => {
    return (element: HTMLDivElement | null) => {
      sectionRefs.current[id] = element;
    };
  }, []);

  const scrollToSection = useCallback((id: SectionId) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSectionHover = useCallback((section: SectionId | "") => {
    setHoveredSection(section);
  }, []);

  return {
    hoveredSection,
    registerRef,
    scrollToSection,
    handleSectionHover,
  };
}

interface SectionWrapperProps {
  sectionId: SectionId;
  registerRef: (id: SectionId) => (element: HTMLDivElement | null) => void;
  onHover: (section: SectionId | "") => void;
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  sectionId,
  registerRef,
  onHover,
  children,
}) => (
  <div
    ref={registerRef(sectionId)}
    onMouseEnter={() => onHover(sectionId)}
    onMouseLeave={() => onHover("")}
  >
    {children}
  </div>
);

export const App: FC = () => {
  const [contactIsShowing, setContactIsShowing] = useState(false);
  const { hoveredSection, registerRef, scrollToSection, handleSectionHover } =
    useSectionNavigation();

  return (
    <div className="xs:bg-gradient-to-b xs:from-[#00032c] xs:to-[#3e4160] min-h-screen sm:bg-gradient-to-b sm:from-[#00032c] sm:to-[#3e4160] md:bg-gradient-to-l md:from-[#00032c] md:to-[#2c2e45] lg:flex">
      {/* sidebar */}
      <div className="px-6 py-12 font-sans md:px-12 md:py-20 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:overflow-auto lg:px-24 lg:py-0 xl:ml-36">
        {/* socials and contact */}
        <div className="visible lg:hidden">
          <Socials
            messageVisible
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
          <Contact
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
        </div>

        <Masthead />

        {/* desktop contact */}
        <div className="hidden lg:block">
          <Contact
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
        </div>

        {/* Desktop navigation and socials */}
        <div className="hidden md:block">
          <LinkList
            handleMenuClick={scrollToSection}
            hoveredSection={hoveredSection}
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
          <Socials
            messageVisible={false}
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
        </div>
      </div>

      <div className="mx-auto mb-24 max-w-screen-xl space-y-8 px-6 py-12 font-sans md:px-12 md:py-20 lg:w-1/2 lg:px-24 lg:py-0 xl:mr-36">
        <SectionWrapper
          sectionId={SECTIONS.ABOUT}
          registerRef={registerRef}
          onHover={handleSectionHover}
        >
          <SplashText />
        </SectionWrapper>

        <SectionWrapper
          sectionId={SECTIONS.EXPERIENCE}
          registerRef={registerRef}
          onHover={handleSectionHover}
        >
          <Experience />
        </SectionWrapper>

        <SectionWrapper
          sectionId={SECTIONS.PROJECTS}
          registerRef={registerRef}
          onHover={handleSectionHover}
        >
          <Projects />
        </SectionWrapper>

        <div className="hidden md:visible">
          <Socials
            messageVisible={false}
            contactIsShowing={contactIsShowing}
            setContactIsShowing={setContactIsShowing}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
