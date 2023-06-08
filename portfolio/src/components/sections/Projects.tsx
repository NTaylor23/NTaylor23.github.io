import { useState } from "react";

import { DividerHeader } from "../modular/Titles";
import { ProjectPreview } from "../modular/ProjectPreview";

import seamtree from "../../static/images/seamtree.png";
import sudoku from "../../static/images/sudoku.png";
import cuboh from "../../static/images/cuboh_sm.png";
import website from "../../static/images/website.png";

export const Projects: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      // TODO: Update the URL with the Camosun capstone site once it exists
      imgSrc: cuboh,
      alt: "Cuboh",
      title: "cuboh",
      description:
        "Led a team of fellow students in developing a versatile full-stack web application for a modern, fast-paced startup.",
      techStack: ["JavaScript", "React", "Django"],
      url: 'https://www.camosun.ca',
      
    },
    {
      imgSrc: website,
      alt: "My Portfolio Site",
      title: "ntaylor.dev",
      description:
        "Designed a responsive portfolio page to showcase my experience and skills.",
      techStack: ["TypeScript", "React", "TailwindCSS"],
      url: 'https://github.com/NTaylor23/NTaylor23.github.io/tree/main/portfolio',
    },
    {
      imgSrc: seamtree,
      alt: "Seam Carving Project",
      title: "seamcarve",
      description:
        "Full-stack interactive content aware image resizing application.",
      techStack: ["Python", "NumPy", "Flask", "JavaScript"],
      url: 'https://github.com/NTaylor23/SeamCarve',
    },
    {
      imgSrc: sudoku,
      alt: "Sudoku Solver Project",
      title: "sudoku",
      description:
        "Solve any Sudoku puzzle through your webcam using computer vision.",
      techStack: ["OpenCV", "ML"],
      url: 'https://github.com/NTaylor23/Sudoku',
    },
  ];
  return (
    <div className="space-y-8">
      <DividerHeader text={"Projects"} />
      {cards.map((card) => (
        <ProjectPreview
          key={card.alt}
          isHovered={hoveredCard === card.alt}
          isGreyed={hoveredCard !== null && hoveredCard !== card.alt}
          handleHover={() => setHoveredCard(card.alt)}
          handleMouseLeave={() => setHoveredCard(null)}
          {...card}
        />
      ))}
    </div>
  );
};

export default Projects;
