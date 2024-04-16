import { WeeksExpensesProvider } from "./contexts/WeeksExpensesProvider";
import { TotalBalance } from './components/totalBalance/TotalBalance';
import { LanguageSelector } from './components/languageSelector/LanguageSelector';
import { GraphicData } from './components/graphicData/GraphicData';

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
