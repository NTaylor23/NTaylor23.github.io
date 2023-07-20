import "../../styles/index.css";
import "../../styles/fonts.css"


interface LinkListProps {
  handleMenuClick: Function;
  hoveredSection: string;
}

export const LinkList: React.FC<LinkListProps> = ({
  handleMenuClick,
  hoveredSection,
}) => {

  const liStyle: string =
    "transition ease-in-out delay-50 cursor-pointer hover:text-slate-50 mt-4";

  const highlightStyle: string = "delay-50 text-slate-50 " + liStyle;
  
  return (
    <div className="mt-12 text-slate-400" style={{ fontFamily: "Raleway", fontWeight: "normal" }}>
      <ul className="mt-2 list-none text-lg tracking-[0.25rem] ">
        <li
          className={
            hoveredSection === "about" ? highlightStyle : liStyle
          }
          onClick={() => handleMenuClick("about")}
        >
          λ - ABOUT
        </li>
        <li
          className={
            hoveredSection === "experience" ? highlightStyle : liStyle
          }
          onClick={() => handleMenuClick("experience")}
        >
          Δ - EXPERIENCE
        </li>
        <li
          className={
            hoveredSection === "projects" ? highlightStyle : liStyle
          }
          onClick={() => handleMenuClick("projects")}
        >
          Ψ - PROJECTS
        </li>
        <li className={liStyle}>
          <a href="/resume.pdf" rel="noopener noreferrer">
            Σ - RÉSUMÉ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
