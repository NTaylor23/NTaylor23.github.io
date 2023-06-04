import { TechIcon } from "./TechIcons";

interface ProjectPreviewProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  techStack: string[];
  isHovered: boolean;
  isGreyed: boolean;
  handleHover: () => void;
  handleMouseLeave: () => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  imgSrc,
  title,
  description,
  techStack,
  alt,
  isHovered,
  isGreyed,
  handleHover,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`mx-8 transition-opacity duration-200 ease-in-out md:mx-0 ${
        isGreyed ? "opacity-50" : "opacity-100"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex max-w-sm items-center rounded-lg">
        <div className="relative flex-none">
          <img
            src={imgSrc}
            alt={alt}
            className="inset-0 h-24 w-28 rounded-md"
          />
        </div>
        <div className="flex-auto px-6">
          <h1 className="font-semibold tracking-[0.15rem] text-slate-300">
            {title}
          </h1>
          <p className="text-small font-regular  py-2 text-left text-slate-400">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap">
        {techStack.map((tech) => (
          <div key={tech} className="mb-2 mr-2">
            <TechIcon text={tech} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
