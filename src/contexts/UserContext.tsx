import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';

// 로컬 스토리지 키
const STORAGE_KEYS = {
  NAME: 'user_name',
  TOKEN: 'user_token',
  IS_EXISTING_USER: 'is_existing_user'
};

interface UserContextTypes {
  name: string;
  token: string;
  isExistingUser: boolean;
  selectedOptions: number[];
  setUserInfo: (name: string, token: string, isExistingUser: boolean) => void;
  setSelectedOptions: (options: number[]) => void;
  clearUserInfo: () => void;
  hasValidToken: () => boolean;
}

// 로컬 스토리지에서 값 가져오기
const getStorageItem = (key: string, defaultValue: any = '') => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    
    // 불리언 값이나 숫자 값인 경우 파싱 시도
    if (typeof defaultValue === 'boolean') {
      return item === 'true';
    } else if (typeof defaultValue === 'number') {
      return Number(item);
    }
    
    // 문자열은 그대로 반환
    return item;
  } catch (error) {
    console.error(`Error getting ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// 초기 상태 설정
const initialContext: UserContextTypes = {
  name: getStorageItem(STORAGE_KEYS.NAME, ''),
  token: getStorageItem(STORAGE_KEYS.TOKEN, ''),
  isExistingUser: getStorageItem(STORAGE_KEYS.IS_EXISTING_USER, false),
  selectedOptions: [],
  setUserInfo: () => {},
  setSelectedOptions: () => {},
  clearUserInfo: () => {},
  hasValidToken: () => false,
};

const UserContext = createContext<UserContextTypes>(initialContext);

export const useUserContext = () => useContext(UserContext);

interface UserProviderPropTypes {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderPropTypes) => {
  // 초기 값을 로컬 스토리지에서 직접 가져옴
  const [name, setName] = useState<string>(getStorageItem(STORAGE_KEYS.NAME, ''));
  const [token, setToken] = useState<string>(getStorageItem(STORAGE_KEYS.TOKEN, ''));
  const [isExistingUser, setIsExistingUser] = useState<boolean>(getStorageItem(STORAGE_KEYS.IS_EXISTING_USER, false));
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  // 페이지 로드 시 로컬 스토리지 확인 및 동기화
  useEffect(() => {
    // 로컬 스토리지 값이 있으면 메모리 상태 업데이트
    const storedName = getStorageItem(STORAGE_KEYS.NAME, '');
    const storedToken = getStorageItem(STORAGE_KEYS.TOKEN, '');
    const storedIsExisting = getStorageItem(STORAGE_KEYS.IS_EXISTING_USER, false);
    
    console.log('UserContext 초기화 - 로컬 스토리지 값:', {
      name: storedName,
      token: storedToken ? `${storedToken.substring(0, 10)}...` : 'none',
      isExistingUser: storedIsExisting
    });
    
    if (storedName !== name) setName(storedName);
    if (storedToken !== token) setToken(storedToken);
    if (storedIsExisting !== isExistingUser) setIsExistingUser(storedIsExisting);
  }, []);

  // 로컬 스토리지 변경사항 감지 및 동기화
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.NAME) {
        setName(getStorageItem(STORAGE_KEYS.NAME, ''));
      } else if (e.key === STORAGE_KEYS.TOKEN) {
        setToken(getStorageItem(STORAGE_KEYS.TOKEN, ''));
      } else if (e.key === STORAGE_KEYS.IS_EXISTING_USER) {
        setIsExistingUser(getStorageItem(STORAGE_KEYS.IS_EXISTING_USER, false));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // 유효한 토큰이 있는지 확인 (localStorage에서 직접 확인)
  const hasValidToken = useCallback(() => {
    // 항상 localStorage에서 최신 값을 직접 확인
    const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
    const storedName = localStorage.getItem(STORAGE_KEYS.NAME);
    
    // 디버깅을 위한 로그
    console.log('토큰 확인:', !!storedToken, '토큰값:', storedToken);
    console.log('이름 확인:', !!storedName, '이름값:', storedName);
    
    // null, undefined 또는 빈 문자열이 아니고 최소 10자 이상인 토큰과 이름이 있는지 확인
    const isValid = 
      !!storedToken && 
      storedToken.length > 10 && 
      !!storedName && 
      storedName.length > 0;
      
    console.log('인증 유효성:', isValid);
    return isValid;
  }, []);

  // 사용자 정보 설정 (메모이제이션)
  const setUserInfo = useCallback((newName: string, newToken: string, newIsExistingUser: boolean) => {
    console.log('사용자 정보 설정:', {
      name: newName,
      token: newToken ? `${newToken.substring(0, 10)}...` : 'none',
      isExistingUser: newIsExistingUser
    });
    
    // 로컬 스토리지에 저장 (JSON.stringify 사용하지 않고 직접 저장)
    localStorage.setItem(STORAGE_KEYS.NAME, newName);
    localStorage.setItem(STORAGE_KEYS.TOKEN, newToken);
    localStorage.setItem(STORAGE_KEYS.IS_EXISTING_USER, String(newIsExistingUser));
    
    // 상태 업데이트
    setName(newName);
    setToken(newToken);
    setIsExistingUser(newIsExistingUser);
  }, []);

  // 사용자 정보 초기화 (메모이제이션)
  const clearUserInfo = useCallback(() => {
    console.log('사용자 정보 초기화');
    
    // 로컬 스토리지에서 삭제
    localStorage.removeItem(STORAGE_KEYS.NAME);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.IS_EXISTING_USER);
    
    // 상태 초기화
    setName('');
    setToken('');
    setIsExistingUser(false);
    setSelectedOptions([]);
  }, []);

  // 선택 옵션 설정 (메모이제이션)
  const memoizedSetSelectedOptions = useCallback((options: number[]) => {
    setSelectedOptions(options);
  }, []);

  // 컨텍스트 값 메모이제이션
  const contextValue = {
    name,
    token,
    isExistingUser,
    selectedOptions,
    setUserInfo,
    setSelectedOptions: memoizedSetSelectedOptions,
    clearUserInfo,
    hasValidToken,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}; 