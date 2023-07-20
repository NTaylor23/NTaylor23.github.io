import { JobLink } from "./LinkStyles";
import "../../styles/fonts.css"

interface BaseHeaderProps {
  text: string;
  children?: React.ReactNode;
}

interface HeaderLinkProps extends BaseHeaderProps {
  title: string;
  url: string;
}

const BaseHeader: React.FC<
  BaseHeaderProps & {
    className: string;
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
> = ({ text, className, Element }) => {
  return (
    <div className="ms-8 md:ms-0" >
      <Element className={`text-left ${className}`}>{text}</Element>
    </div>
  );
};

const TopHeader: React.FC<BaseHeaderProps> = ({ text }) => {
  return (
    <BaseHeader
      text={text}
      className="py-4 text-4xl font-semibold tracking-[0.25rem] text-slate-100 "
      Element="h1"
    />
  );
};

const DividerHeader: React.FC<BaseHeaderProps> = ({ text }) => {
  return (
    <BaseHeader
      text={text}
      className="py-3 text-lg font-semibold uppercase tracking-widest  text-slate-200"
      Element="h2"
    />
  );
};

const DateRange: React.FC<BaseHeaderProps> = ({ text }) => {
  return (
    <BaseHeader
      text={text}
      className="text-sm font-semibold uppercase tracking-[.25em]  text-slate-500"
      Element="h3"
    />
  );
};

const JobTitle: React.FC<HeaderLinkProps> = ({
  text,
  title,
  url,
  children,
}) => {
  return (
    <div className="flex flex-shrink items-center space-x-2 text-sm ">
      <BaseHeader
        text={title}
        className="font-semibold text-slate-100 tracking-wide"
        Element="h4"
      />
      <p>·</p>
      <JobLink text={text} url={url} />
      {children}
    </div>
  );
};

const SubHeading: React.FC<BaseHeaderProps> = ({ text }) => {
  return (
    <BaseHeader
      text={text}
      className="text-slate-150 text-lg tracking-wide"
      Element="h3"
    />
  );
};

export { TopHeader, DividerHeader, DateRange, JobTitle, SubHeading };
