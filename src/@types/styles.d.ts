import 'styled-components';

import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

//cria uma tipagem para o modulo styled-components do npm
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
