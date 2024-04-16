import { WeeksExpensesProvider } from "./contexts/WeeksExpensesProvider";
import { TotalBalance } from './components/totalBalance/TotalBalance';
import { GraphicData } from './components/graphicData/GraphicData';
import { LanguageSelector } from './components/languageSelector/LanguageSelector';

export default function App() {
  return (
    <div className="main-wrapper">
      <WeeksExpensesProvider>
        <LanguageSelector />
        <TotalBalance />
        <GraphicData />
      </WeeksExpensesProvider>
    </div>
  );
}
