interface ProjectPreviewProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="mx-8 md:mx-0 flex max-w-sm items-center rounded-lg">
      <div className="relative flex-none">
        <img
          src={imgSrc}
          alt=""
          style={{ width: 115, height: 100 }}
          className="border-slate inset-0 rounded-md border-2 border-solid object-cover"
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-semibold tracking-[0.15rem] text-slate-300">
            {title}
          </h1>
        </div>
        <div className="mt-2">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
