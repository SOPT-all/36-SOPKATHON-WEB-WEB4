import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QuestionPage from '@pages/questionPage/QuestionPage';
import ResultsPage from '@pages/resultsPage/ResultsPage';
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
          <Route path="/result" element={<ResultsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
