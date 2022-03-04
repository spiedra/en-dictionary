import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import App from './App'
import Home from './pages/Home'
import Translation from './pages/Translation/index'
import NotFound from './pages/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="translation/:word" element={<Translation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
