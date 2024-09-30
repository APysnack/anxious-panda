import { DefaultTheme as NavigationLightTheme } from '@react-navigation/native';

const CustomLightTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    background: 'white',
  },
};

export default CustomLightTheme;
