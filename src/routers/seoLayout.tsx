import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/seoLayout';
import { NotFound } from '../modules/404';
import Section from '../modules/mainPages/section';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />,
            },
            {
                path: '/',
                element: <Section /> 
            },
        ],
    },
]);