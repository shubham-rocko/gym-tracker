import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/dashboard';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard
    },
    {
        path: "/signin",
        Component: SignIn
    },
    {
        path: "/signup",
        Component: SignUp
    }, 
    {
        path: "*",
        Component: Dashboard
    }
  ]
);
  