import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';
//no mais tem que fazerr aimportação com chaves assim import { App } from './App.tsx'

//O export function me obriga a utilizar o nome da função no caso app
export function App() {
  return ( 
    /*posso ter varios arquivos de themas e no caso seria so trocar o 
    defaultTheme para outroTheme*/ 
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider> 
  )
}

