import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TotalBalance } from "./../TotalBalance";
import { weekData } from "../../../weekData";

describe("TotalBalance component", () => {
  it("calculates total week expenses correctly", () => {
    const weekExpenses = weekData.datasets[0].data;
    const totalWeekExpense = weekExpenses
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);
    expect(totalWeekExpense).toBe("531.70");
  });

  it("renders total balance correctly", () => {
    const { getByText } = render(<TotalBalance />);
    const totalBalanceElement = getByText(/total balance/i);
    const totalExpenseElement = getByText(/531.70 €/i);
    expect(totalBalanceElement).toBeInTheDocument();
    expect(totalExpenseElement).toBeInTheDocument();
  });
});



