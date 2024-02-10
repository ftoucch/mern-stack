import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>About page</h1>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
