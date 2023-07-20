import React from "react";

import "../../styles/fonts.css"

interface LinkProps {
  text: string;
  url: string;
}

const BaseLink: React.FC<
  LinkProps & {
    className: string;
  }
> = ({ text, url }) => {
  return (
      <a href={url} className={"text-white underline hover:text-teal-500 tracking-wider"}>
        {text}
      </a>
  );
};

const JobLink: React.FC<LinkProps> = ({ text, url }) => {
  return <BaseLink text={text} url={url} className="" />;
};

export { BaseLink, JobLink };
