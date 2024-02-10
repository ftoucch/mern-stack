import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing, HomeLayout, Register, Login, DashboardLayout } from './pages'; // we didnot add index.js because this wll be the entry point regardless

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
