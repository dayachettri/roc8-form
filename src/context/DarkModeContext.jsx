import { children, createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };

  const valueToShare = {
    darkTheme,
    toggleDarkMode,
  };

  return <DarkModeProvider value={valueToShare}>{children}</DarkModeProvider>;
}

export default DarkModeContext;
export { DarkModeProvider };
