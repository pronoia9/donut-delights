export const isDarkTheme = (theme) => theme === 'dark';

export const toggleTheme = (theme, setTheme) => setTheme(isDarkTheme(theme) ? 'light' : 'dark');

export const systemThemeChangeHandler = (e, setTheme) => {
  setTheme(e.matches ? 'dark' : 'light');
};
