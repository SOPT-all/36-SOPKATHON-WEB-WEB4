import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QuestionPage from '@pages/questionPage/questionPage';
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
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
