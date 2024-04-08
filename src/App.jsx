import { GraphicData } from "./Components/GraphicData";
import { TotalBalance } from "./Components/TotalBalance/TotalBalance";


export default function App() {

  return (
    <div className="main-wrapper">
      <TotalBalance />
      <GraphicData />
    </div>
  );
}
