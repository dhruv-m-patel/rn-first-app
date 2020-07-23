import { createContext } from 'react';

const themeContext = createContext({
  canUseCustomFonts: false,
});

export default themeContext;
