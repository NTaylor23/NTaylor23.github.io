import "../../styles/fonts.css";

interface BaseParagraphProps {
  children?: React.ReactNode;
}

const BaseParagraph: React.FC<
  BaseParagraphProps & {
    className: string;
  }
> = ({ children, className }) => {
  return (
    <div style={{ fontFamily: "Raleway" }}>
      <p
        className={`mx-8 py-4 text-left text-slate-200/75 md:mx-0 ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

const DescParagraph: React.FC<BaseParagraphProps> = ({ children }) => {
  return (
    <BaseParagraph
      children={children}
      className="text-small font-regular tracking-wide text-slate-50/75"
    />
  );
};

const JobParagraph: React.FC<BaseParagraphProps> = ({ children }) => {
  return (
    <BaseParagraph children={children} className="text-small font-regular" />
  );
};

const FooterParagraph: React.FC<BaseParagraphProps> = ({ children }) => {
  return (
    <BaseParagraph children={children} className=" text-xs text-slate-500" />
  );
};

export { DescParagraph, JobParagraph, FooterParagraph };
