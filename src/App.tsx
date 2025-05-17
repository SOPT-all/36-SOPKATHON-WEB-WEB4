import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import QuestionPage from '@pages/questionPage/QuestionPage';
import RegisterPage from '@pages/registerPage/RegisterPage';
import ResultsPage from '@pages/resultsPage/ResultsPage';
import SplashPage from '@pages/splashPage/SplashPage';
import IntroPage from '@pages/introPage/introPage';

import PartPage from '@pages/partPage/PartPage';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import { UserProvider, useUserContext } from './contexts/UserContext';

// 인증이 필요한 라우트를 위한 래퍼 컴포넌트
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { name, token } = useUserContext();
  
  if (!name || !token) {
    console.log('인증 정보 없음, 등록 페이지로 리디렉션합니다.');
    return <Navigate to="/register" replace />;
  }
  
  return <>{children}</>;
};

// 실제 라우팅을 담당하는 컴포넌트
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* 보호된 라우트 */}
      <Route path="/question" element={
        <ProtectedRoute>
          <QuestionPage />
        </ProtectedRoute>
      } />
      <Route path="/result" element={
        <ProtectedRoute>
          <ResultsPage />
        </ProtectedRoute>
      } />
      <Route path="/part" element={
        <ProtectedRoute>
          <PartPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Global styles={GlobalStyle} />
          <AppRoutes />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
