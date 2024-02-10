import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Landing,
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Error,
} from './pages'; // we didnot add index.js because this wll be the entry point regardless

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
