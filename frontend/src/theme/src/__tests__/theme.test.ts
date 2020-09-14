import { adidasThemeDark, adidasThemeLight, getAdidasMuiThemePalette } from '../theme';

describe('createAdidasMuiTheme', () => {
  it.each`
    theme               | expectedName
    ${adidasThemeDark}  | ${'DARK_THEME'}
    ${adidasThemeLight} | ${'LIGHT_THEME'}
  `('adds the theme name $expectedName to the corresponding theme', ({ theme, expectedName }) => {
    expect(theme.themeName).toBe(expectedName);
  });
});

describe('getAdidasMuiThemePalette', () => {
  it('throws if the theme name is missing', () => {
    const namelessTheme = { ...adidasThemeDark };
    delete (namelessTheme as any).themeName;
    expect(() => getAdidasMuiThemePalette(namelessTheme)).toThrowError(
      'Received theme without themeName. Use only the exported themes of mui-theme-adidas.'
    );
  });

  it('throws if the theme name cannot be found', () => {
    const namelessTheme = { ...adidasThemeDark };
    (namelessTheme as any).themeName = 'unknown';
    expect(() => getAdidasMuiThemePalette(namelessTheme)).toThrowError(
      'Theme with name "unknown" does not exist.'
    );
  });
});
