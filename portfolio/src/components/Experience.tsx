import { DividerHeader } from "./Titles";
import { TimeSpan } from "./TimeSpan";

import ".././styles/App.css";

export const Experience: React.FC = () => {
  return (
    <div className="space-y-8">
      <DividerHeader text={"Experience"} />

      <TimeSpan
        dateRange={"August 2023 - Present"}
        title={"Software Developer"}
        orgName={"Quester Tangent"}
        url={"https://www.questertangent.com/"}
        description={
          "Create, test, and optimize safety-critical software for a proprietary real-time operating system utilized globally in the rail transit industry."
        }
        techStack={["C", "Python", "RTOS", "Compiler Design"]}
      />

      <TimeSpan
        dateRange={"May 2023 - August 2023"}
        title={"Software Developer Intern"}
        orgName={"Cuboh"}
        url={"https://www.cuboh.com/"}
        description={
          "Led a team of fellow students in developing a versatile full-stack web application for a modern, fast-paced startup. Implemented intuitive, functional designs with React and designed secure validation endpoints in Django. Provided leadership through close collaboration, knowledge sharing and mentorship."
        }
        techStack={["JavaScript", "React", "RESTful APIs", "Web Services"]}
      />

      <TimeSpan
        dateRange={"May 2022 - August 2022"}
        title={"Software Developer Intern"}
        orgName={"Unity Technologies"}
        url={"https://unity.com/"}
        description={
          "Contributed to the success of a VR education platform through hands-on involvement in development, testing, and client relationship management, resulting in a successfully shipped product. Designed and implemented an automated video compression and uploading process, streamlining the multimedia pipeline between the company and clients."
        }
        techStack={["C#", "Unity", "AR/VR", "WebGL"]}
      />

      <TimeSpan
        dateRange={"April 2021 - April 2022"}
        title={"Technologist"}
        orgName={"Cascadia"}
        url={"https://www.cascadiaseaweed.com/"}
        description={
          "Led the design and testing of software for an underwater camera system, contributing to the successful completion of a federal environmental sustainability project."
        }
        techStack={["C#", "Unity", "AR/VR", "WebGL"]}
      />
    </div>
  );
};

export default Experience;
