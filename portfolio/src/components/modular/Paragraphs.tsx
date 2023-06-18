interface BaseParagraphProps {
  children?: React.ReactNode;
}

const BaseParagraph: React.FC<
  BaseParagraphProps & {
    className: string;
  }
> = ({ children, className }) => {
  return (
    <div className="">
      <p className={`py-4 mx-8 md:mx-0 text-left text-slate-300/75 ${className}`}>{children}</p>
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
    <BaseParagraph
      children={children}
      className="text-small font-regular"
    />
  );
};

const FooterParagraph: React.FC<BaseParagraphProps> = ({ children }) => {
  return (
    <BaseParagraph
      children={children}
      className=" text-xs text-slate-500"
    />
  );
};

export { DescParagraph, JobParagraph, FooterParagraph };
