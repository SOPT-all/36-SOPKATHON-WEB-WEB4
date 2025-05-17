import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QuestionPage from '@pages/questionPage/QuestionPage';
import RegisterPage from '@pages/registerPage/RegisterPage';
import ResultsPage from '@pages/resultsPage/ResultsPage';
import PartPage from '@pages/partPage/PartPage';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes>
          <Route path="/" element={<div>홈 페이지</div>} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/result" element={<ResultsPage />} />
          <Route path="/part" element={<PartPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
