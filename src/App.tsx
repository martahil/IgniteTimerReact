import { ThemeProvider, StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { CyclesContextProvider } from './contexts/CyclesContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <Router />
          </StyleSheetManager>
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

