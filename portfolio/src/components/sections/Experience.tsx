import { useState } from "react";

import { DividerHeader } from "../modular/Titles";
import { TimeSpan } from "../modular/TimeSpan";

import "../../styles/App.css";
import "../../styles/fonts.css";

export const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      dateRange: "November 2023 - Present",
      title: "Full Stack Software Developer",
      orgName: "Pivott",
      url: "https://www.pivott.io/",
      description:
        "I help build a vendor management software platform for the North American multifamily housing industry. I develop backend services with Django and PostgreSQL, create frontend features in Vue 3, and design AWS infrastructure. I also maintain CI/CD workflows, contribute to technical architecture decisions, and ensure software quality across the stack.",
      techStack: ["Django", "Vue", "PostgreSQL", "AWS", "OpenAI"],
    },
    {
      dateRange: "May 2023 - November 2023",
      title: "Software Developer",
      orgName: "Quester Tangent",
      url: "https://www.questertangent.com/",
      description:
        "Maintained software used worldwide in rail transit, and built a lexical analysis toolchain in Python that automated testing and saved the hardware engineering team roughly 150 workdays.",
      techStack: ["C", "Python", "RTOS", "Compiler Design"],
    },
    {
      dateRange: "May 2022 - August 2022",
      title: "Software Developer Co-op",
      orgName: "Unity",
      url: "https://unity.com/",
      description:
        "Worked on a VR education platform, contributing to development, testing, and client support to help deliver the finished product. Built an automated video upload pipeline, streamlining multimedia workflows between the company and clients.",
      techStack: ["C#", "Unity", "AR/VR", "WebGL"],
    },
  ];

  return (
    <div className="space-y-8">
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
