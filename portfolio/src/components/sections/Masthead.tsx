import { TopHeader } from "../modular/Titles";
import { DescParagraph } from "../modular/Paragraphs";
import { JobLink } from "../modular/LinkStyles";

import "../../styles/App.css";
import "../../styles/fonts.css";

export const Masthead: React.FC = () => {
  return (
    <div
      className="lg:mt-12"
      style={{ fontFamily: "Raleway", fontWeight: "normal" }}
    >
      <TopHeader text={"Nicholas Taylor"} />
      <DescParagraph>
        I'm a Victoria, British Columbia based full-stack developer with three years of
        professional software development experience.
        <br />
        <br />
        <span className="visible lg:invisible">
          For the most detailed overview of my professional history, please see
          my&nbsp;
          <JobLink text={"résumé"} url={"/resume.pdf"} />.
        </span>
      </DescParagraph>
    </div>
  );
};

export default Masthead;
