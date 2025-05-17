import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextTypes {
  name: string;
  token: string;
  isExistingUser: boolean;
  setUserInfo: (name: string, token: string, isExistingUser: boolean) => void;
  clearUserInfo: () => void;
}

const initialContext: UserContextTypes = {
  name: '',
  token: '',
  isExistingUser: false,
  setUserInfo: () => {},
  clearUserInfo: () => {},
};

const UserContext = createContext<UserContextTypes>(initialContext);

export const useUserContext = () => useContext(UserContext);

interface UserProviderPropTypes {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderPropTypes) => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(false);

  const setUserInfo = (name: string, token: string, isExistingUser: boolean) => {
    setName(name);
    setToken(token);
    setIsExistingUser(isExistingUser);
  };

  const clearUserInfo = () => {
    setName('');
    setToken('');
    setIsExistingUser(false);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        token,
        isExistingUser,
        setUserInfo,
        clearUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}; 