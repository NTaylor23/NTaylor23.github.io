import ".././styles/App.css";

//  - Symbols: [Σ for resume, λ for About, ∈ for work experience, ∩ for collaborations] ...

const liStyle: string = "hover:text-slate-50 mt-4 hover:animate-pulse hover:animate-"

export const LinkList: React.FC = () => {
  return (
    <div className="mx-8 mt-24 text-slate-500">
      <ul className="text-lg list-none tracking-[0.25rem] mt-2 ">
        <li className={liStyle}>
            λ - ABOUT
        </li>
        <li className={liStyle}>
            ∈ - EXPERIENCE
        </li>
        <li className={liStyle}>
            η - PROJECTS
        </li>
        <li className={liStyle}>
            ∩ - COLLABORATIONS
        </li>
        <li className={liStyle}>
            Σ - RÉSUMÉ
        </li>
        <li className={liStyle}>
            μ - CONTACT
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
