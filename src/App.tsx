import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const { hasValidToken } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  // 컴포넌트 마운트 시 강제로 토큰 검사 실행
  useEffect(() => {
    console.log('보호된 라우트 접근:', location.pathname);
    const checkAuth = () => {
      const isValid = hasValidToken();
      console.log('인증 상태:', isValid ? '유효함' : '유효하지 않음');
      setIsAuthenticated(isValid);
      
      if (!isValid) {
        console.log('인증 정보 없음, 등록 페이지로 리디렉션합니다.');
        navigate('/register', { replace: true });
      }
    };
    
    checkAuth();
  }, [location.pathname, hasValidToken, navigate]);
  
  // 인증 실패 시 null 반환 (이미 useEffect에서 리디렉션을 처리함)
  if (!isAuthenticated && isAuthenticated !== null) {
    return null;
  }
  
  // 인증 성공 또는 확인 중이면 자식 컴포넌트 렌더링
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
      
      {/* 알 수 없는 경로는 splash 페이지로 리디렉션 */}
      <Route path="*" element={<Navigate to="/" replace />} />
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
