import { DividerHeader } from "./Titles";
import { Biography } from "./static_texts/Biography";

import ".././styles/App.css";

export const SplashText: React.FC = () => {
  return (
    <div className="lg:mt-12">
      <DividerHeader text={"About"} />
      <Biography />
    </div>
  );
};

export default SplashText;
