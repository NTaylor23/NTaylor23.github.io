import { DescParagraph } from "../modular/Paragraphs";
import { JobLink } from "../modular/LinkStyles";

import "../../styles/fonts.css";

export const Biography = () => (
  <DescParagraph>
    Currently, I'm writing software for the multifamily industry at{" "}
    <JobLink text="Pivott" url="https://www.pivott.io/" /> in Victoria.
    <br />
    <br />
    Previously, I've worked for a recently-acquired{" "}
    <JobLink text="start up" url="https://www.cuboh.com/" />, the{" "}
    <JobLink
      text="global rail transit industry"
      url="https://www.questertangent.com/"
    />
    , and <JobLink text="Unity Technologies" url="https://unity.com/" />.
  </DescParagraph>
);
