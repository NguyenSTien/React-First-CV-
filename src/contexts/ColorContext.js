import { createContext, useContext, useState } from 'react';

export const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('');
  const [lightColor, setLightColor] = useState('');
  const [border, setBorder] = useState('');
  const [textColor, setTextColor] = useState('');
  const [borderBottom, setBorderBottom] = useState('');
  const [white, setWhite] = useState('');

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
        lightColor,
        setLightColor,
        border,
        setBorder,
        textColor,
        setTextColor,
        borderBottom,
        setBorderBottom,
        white,
        setWhite,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
