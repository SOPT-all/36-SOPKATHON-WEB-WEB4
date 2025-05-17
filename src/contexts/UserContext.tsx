import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextTypes {
  name: string;
  token: string;
  isExistingUser: boolean;
  selectedOptions: number[];
  setUserInfo: (name: string, token: string, isExistingUser: boolean) => void;
  setSelectedOptions: (options: number[]) => void;
  clearUserInfo: () => void;
}

const initialContext: UserContextTypes = {
  name: '',
  token: '',
  isExistingUser: false,
  selectedOptions: [],
  setUserInfo: () => {},
  setSelectedOptions: () => {},
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
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const setUserInfo = (name: string, token: string, isExistingUser: boolean) => {
    setName(name);
    setToken(token);
    setIsExistingUser(isExistingUser);
  };

  const clearUserInfo = () => {
    setName('');
    setToken('');
    setIsExistingUser(false);
    setSelectedOptions([]);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        token,
        isExistingUser,
        selectedOptions,
        setUserInfo,
        setSelectedOptions,
        clearUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}; 