import { useState } from "react";

import { DividerHeader } from "../modular/Titles";
import { TimeSpan } from "../modular/TimeSpan";

import "../../styles/App.css";
import "../../styles/fonts.css"


export const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      dateRange: "Nov 2023 - Present",
      title: "Full Stack Software Developer",
      orgName: "Rooof",
      url: "https://www.rooof.com/",
      description:
        "I'm helping to build a new vendor management software product for the North American multifamily housing industry. My key responsibilties are server-side development using Django and PostgreSQL, front-end development with Vue 3, and designing infrastructure on AWS. Additionally, I design and maintain CI/CD workflows, play a significant role in technical design decisions, and support quality assurance.",
      techStack: ["Django", "Vue", "PostgreSQL", "AWS", "Google Cloud"],
    },
    {
      dateRange: "May 2023 - Nov 2023",
      title: "Software Developer",
      orgName: "Quester Tangent",
      url: "https://www.questertangent.com/",
      description:
        "Created, tested, and optimized safety-critical software for a proprietary real-time operating system utilized globally in the rail transit industry. Designed, developed, and implemented a lexical analysis tool-chain in Python that automated software testing processes, resulting in a time savings of 150 working days for the hardware engineering department.",
      techStack: ["C", "Python", "RTOS", "Compiler Design"],
    },
    {
      dateRange: "May 2022 - August 2022",
      title: "Software Developer Intern",
      orgName: "Unity",
      url: "https://unity.com/",
      description:
        "Contributed to the success of a VR education platform through hands-on involvement in development, testing, and client relationship management, resulting in a successfully shipped product. Designed and implemented an automated video compression and uploading process, streamlining the multimedia pipeline between the company and clients.",
      techStack: ["C#", "Unity", "AR/VR", "WebGL"],
    },
    {
      dateRange: "April 2021 - April 2022",
      title: "Technologist",
      orgName: "Cascadia",
      url: "https://www.cascadiaseaweed.com/",
      description:
        "Led the design and testing of software for an underwater camera system, contributing to the successful completion of a federal environmental sustainability project.",
      techStack: ["Python", "Raspberry Pi", "GIS"],
    },
  ];

  return (
    <div className="space-y-8" >
      <DividerHeader text={"Experience"} />
      {cards.map((card) => (
        <TimeSpan
          key={card.orgName}
          isHovered={hoveredCard === card.orgName}
          isGreyed={hoveredCard !== null && hoveredCard !== card.orgName}
          handleHover={() => setHoveredCard(card.orgName)}
          handleMouseLeave={() => setHoveredCard(null)}
          {...card}
        />
      ))}
    </div>
  );
};

export default Experience;
