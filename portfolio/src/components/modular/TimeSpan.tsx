import "../../styles/fonts.css";

import { DateRange, JobTitle } from "./Titles";
import { JobParagraph } from "./Paragraphs";
import { TechIcon } from "./TechIcons";

interface TimeSpanProps {
  dateRange: string;
  title: string;
  orgName: string;
  url: string;
  description: string;
  techStack: string[];
  isHovered: boolean;
  isGreyed: boolean;
  handleHover: () => void;
  handleMouseLeave: () => void;
}

export const TimeSpan: React.FC<TimeSpanProps> = ({
  dateRange,
  title,
  orgName,
  url,
  description,
  techStack,
  isHovered,
  isGreyed,
  handleHover,
  handleMouseLeave,
}) => {
  return (
      <div
        className={`mb-4 rounded transition-opacity duration-200 ease-in-out ${
          isGreyed ? "opacity-50" : "opacity-100"
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: "Raleway", fontWeight: "normal" }}
      >
        <DateRange text={dateRange} />
        <JobTitle text={orgName} title={title} url={url} />
        <JobParagraph>{description}</JobParagraph>
        <div className="mx-8 flex flex-wrap md:mx-0">
          {techStack.map((t, k) => (
            <div key={k} className="mb-2 mr-2">
              <TechIcon text={t} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default TimeSpan;
