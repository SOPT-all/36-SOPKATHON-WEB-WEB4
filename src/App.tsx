import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QuestionPage from '@pages/questionPage/QuestionPage';
import RegisterPage from '@pages/registerPage/RegisterPage';
import ResultsPage from '@pages/resultsPage/ResultsPage';
import SplashPage from '@pages/splashPage/SplashPage';
import IntroPage from '@pages/introPage/IntroPage';

import theme from '@styles/theme';
import GlobalStyle from './styles/global';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/result" element={<ResultsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
