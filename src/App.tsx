import React from 'react';
import {Landing} from './Components/index'
import { ThemeProvider } from 'styled-components'
import {theme} from './Styles/Theme'
import {GlobalStyle} from './Styles/Global'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Landing/>
        <GlobalStyle/>
      </ThemeProvider>
  );
}

export default App;
