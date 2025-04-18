import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/seoLayout';
import { Home } from '../modules/mainPages/home';
import { Dashboard } from '../modules/mainPages/dashboard';
import { NotFound } from '../modules/404';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);