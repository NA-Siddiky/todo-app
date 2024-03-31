import React from 'react';

interface UserContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = React.createContext<UserContextType>({
  email: '',
  setEmail: () => {},
});

export default UserContext;
