import "../../styles/index.css";

const liStyle: string = "cursor-pointer hover:text-slate-50 mt-4 hover:animate-pulse";

interface LinkListProps {
  handleMenuClick: Function;
}

export const LinkList: React.FC<LinkListProps> = ({ handleMenuClick }) => {
  return (
    <div className="mt-12 text-slate-500">
      <ul className="text-lg list-none tracking-[0.25rem] mt-2 ">
        <li className={liStyle} onClick={() => handleMenuClick('about')}>
            λ - ABOUT
        </li>
        <li className={liStyle} onClick={() => handleMenuClick('experience')} >
            Δ - EXPERIENCE
        </li>
        <li className={liStyle} onClick={() => handleMenuClick('projects')} >
            Ψ - PROJECTS
        </li>
        <li className={liStyle}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Σ - RÉSUMÉ</a>
        </li>
        {/* <li className={liStyle}>
            ℵ - CONTACT
        </li> */}
      </ul>
    </div>
  );
};

export default LinkList;
