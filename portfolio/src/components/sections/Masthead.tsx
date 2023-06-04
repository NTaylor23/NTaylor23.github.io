import { TopHeader } from "../modular/Titles";
import { DescParagraph } from "../modular/Paragraphs";

import "../../styles/App.css";

export const Masthead: React.FC = () => {
  return (
    <div className="lg:mt-12">
      <TopHeader text={"Nicholas Taylor"} />
      <DescParagraph>
        I'm a Victoria based full-stack developer, educator, student, and
        artist.
        <br />
        <br />I like solving complex problems at the intersection of art and
        technology.
      </DescParagraph>
    </div>
  );
};

export default Masthead;
