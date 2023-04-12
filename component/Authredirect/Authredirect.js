import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const AuthRedirect = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.replace('/login');
//     }
//   }, [isAuthenticated, router]);

//   return null;
};

export default AuthRedirect;