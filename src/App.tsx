import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"

import light from "./styles/themes/light"
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Router />
    </ThemeProvider>
  )
}

export default App
