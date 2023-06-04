interface TechIconsProps {
  text: string;
}

export const TechIcon: React.FC<TechIconsProps> = ({ text }) => {
  return (
    <div className="rounded bg-[#2DD4BF1A] px-3 py-1 text-[12px] font-bold text-teal-200 mb-2 tracking-widest">
      {text}
    </div>
  );
};

export default TechIcon;