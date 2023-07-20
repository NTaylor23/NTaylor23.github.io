import { DescParagraph } from "../modular/Paragraphs";
import { JobLink } from "../modular/LinkStyles";

import "../../styles/fonts.css"


export const Biography = () => {
  return (
    <DescParagraph>
      Back in 2020, I decided to try creating custom scripts to design my own
      sound engineering tools.
      <br />
      <br />A few years later, I've shipped quality software for a
      Y Combinator <JobLink text={"start up"} url={"https://www.cuboh.com/"} />,
      the{" "}
      <JobLink
        text={"global rail transit industry"}
        url={"https://www.questertangent.com/"}
      />
      , and a <JobLink text={"game engine"} url={"https://unity.com/"} /> with
      two billion monthly active users.
      <br />
      <br />
      In my free time, I tutor computer science students, write music, work on
      art and tech projects with friends, and learn about everything I can.
    </DescParagraph>
  );
};
