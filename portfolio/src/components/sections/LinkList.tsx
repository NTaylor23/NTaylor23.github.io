import "../../styles/index.css";
import "../../styles/fonts.css";

interface LinkListProps {
  handleMenuClick: Function;
  hoveredSection: string;
  contactIsShowing: boolean;
  setContactIsShowing: Function;
}

export const LinkList: React.FC<LinkListProps> = ({
  handleMenuClick,
  hoveredSection,
  contactIsShowing,
  setContactIsShowing,
}) => {
  const liStyle: string =
    "transition ease-in-out delay-50 cursor-pointer hover:text-slate-50 mt-4";

  const highlightStyle: string = "delay-50 text-slate-50 " + liStyle;

  return contactIsShowing ? <></> : (
    <div
      className="mt-4 text-slate-400"
      style={{ fontFamily: "Raleway", fontWeight: "normal" }}
    >
      <ul className="mt-2 list-none text-lg tracking-[0.25rem] ">
        <li
          className={hoveredSection === "about" ? highlightStyle : liStyle}
          onClick={() => handleMenuClick("about")}
        >
          λ - ABOUT
        </li>
        <li
          className={hoveredSection === "experience" ? highlightStyle : liStyle}
          onClick={() => handleMenuClick("experience")}
        >
          Δ - EXPERIENCE
        </li>
        <li
          className={hoveredSection === "projects" ? highlightStyle : liStyle}
          onClick={() => handleMenuClick("projects")}
        >
          Ω - PROJECTS
        </li>
        <li className={liStyle}>
          <a href="/resume.pdf" rel="noopener noreferrer">
            Σ - RÉSUMÉ
          </a>
        </li>
        <li className={liStyle} onClick={() => setContactIsShowing(true)}>
            ∩ - CONTACT
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
