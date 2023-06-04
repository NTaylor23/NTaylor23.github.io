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
}

export const TimeSpan: React.FC<TimeSpanProps> = ({
  dateRange,
  title,
  orgName,
  url,
  description,
  techStack,
}) => {
  return (
    <>
      <div className="rounded mb-4 lg:hover:bg-[#FFFFFF1A] hover:animate-fade">

        <DateRange text={dateRange} />
        <JobTitle text={orgName} title={title} url={url} />
        <JobParagraph>{description}</JobParagraph>
        <div className="mx-8 lg:mx-0 flex flex-wrap">
          {techStack.map((t, k) => (
            <div key={k} className="mb-2 mr-2">
              <TechIcon text={t} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeSpan;
