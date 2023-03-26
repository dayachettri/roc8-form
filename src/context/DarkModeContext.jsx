import { createContext, useState } from 'react';

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

  return (
    <DarkModeContext.Provider value={valueToShare}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
export { DarkModeProvider };
