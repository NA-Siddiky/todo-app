import { onAuthStateChanges } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../config/firebase';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanges(auth, user => {
      console.log('get user>>', user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Cleanup function to unsubscribe from auth state changes when the component unmounts
    return () => unsub();
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return {user};
}
