import { render, fireEvent } from '@testing-library/react';
import { LanguageSelector } from '../LanguageSelector';

const mockUseTranslation = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { changeLanguage: mockUseTranslation } }),
}));

describe('LanguageSelector', () => {
  test('renderiza los botones de selección de idioma correctamente', () => {
    const { queryByAltText } = render(<LanguageSelector />);

    expect(queryByAltText('English') !== null).toBe(true);
    expect(queryByAltText('Español') !== null).toBe(true);
    expect(queryByAltText('Català') !== null).toBe(true);
  });

  test('Cambia el idioma cuando se hace clic en un botón de selección de idioma', () => {
    const { getByAltText } = render(<LanguageSelector />);

    fireEvent.click(getByAltText('Español'));

    expect(mockUseTranslation).toHaveBeenCalled();

  });
});
