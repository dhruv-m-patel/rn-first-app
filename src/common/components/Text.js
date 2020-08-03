import React, { useContext } from 'react';
import { Text as RNText } from 'react-native';
import ThemeContext from '../context/ThemeContext';

const Text = ({
  bold,
  style: customStyle,
  ...props
}) => {
  const { canUseCustomFonts } = useContext(ThemeContext);
  return (
    <RNText
      style={{
        ...canUseCustomFonts && {
          fontFamily: 'open-sans',
          ...bold && { fontFamily: 'open-sans-bold' },
        },
        ...customStyle,
      }}
      {...props}
    />
  );
};

export default Text;
