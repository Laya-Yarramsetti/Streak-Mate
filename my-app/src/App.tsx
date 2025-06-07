import LoginPage from './pages/LoginPage';
import RegisterModal  from './pages/RegisterModal';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <div>404 Page Not Found</div>
  },
  {
    path: '/register',
    element: <RegisterModal />,
    errorElement: <div>404 Page Not Found</div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
