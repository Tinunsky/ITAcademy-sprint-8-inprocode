import { render } from '@testing-library/react';
import { GraphicData } from '../GraphicData';
import { WeeksExpensesProvider } from '../../../contexts/WeeksExpensesProvider';

beforeAll(() => {
  globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe('GraphicData', () => {
  test('renders without crashing', () => {
    render(
      <WeeksExpensesProvider>
        <GraphicData />
      </WeeksExpensesProvider>
    );
  });
});