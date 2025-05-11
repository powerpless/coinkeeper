import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { currentUser } = useAuth();
  console.log('currentUser:', currentUser);
  return currentUser ? children : <Navigate to="/login" replace />;
}