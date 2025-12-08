import { DividerHeader } from "../modular/Titles";
import { Biography } from "../texts/Biography";

import "../../styles/App.css";
import "../../styles/fonts.css";

export const SplashText: React.FC = () => (
  <div className="lg:mt-12">
    <DividerHeader text={"About"} />
    <Biography />
  </div>
);

export default SplashText;
