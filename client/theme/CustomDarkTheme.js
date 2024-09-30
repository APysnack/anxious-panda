import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#2c2f33',
  },
};

export default CustomDarkTheme;
