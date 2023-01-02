import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import LandingPage from './pages/LandingPage'
import OnsenListsPage from './pages/OnsenListsPage'
import CheckOutPage from './pages/CheckOutPage'
import ConfirmationPage from './pages/Confirmation';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import BookingHistoryPage from './pages/BookingHistoryPage';
import AccountDetailsPage from './pages/AccountDetailsPage';
import BookingPage from './pages/BookingPage';
import TeamPage from './pages/TeamPage';
import CreateAdminPage from './pages/CreateAdminPage';
import UpdateAdminPage from './pages/UpdateAdminPage';


const router = createBrowserRouter([
  {
    path:"/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onsens",
        element: <OnsenListsPage />
      },
      {
        path: "/booking",
        element: <BookingPage />
      },
      {
        path: "/checkOut",
        element: <CheckOutPage />
      },
      {
        path: "/Confirmation",
        element: <ConfirmationPage />
      },
      {
        path: "/LogIn",
        element: <LogInPage />
      },
      {
        path: "/SignUp",
        element: <SignUpPage />
      },
      {
        path: "/BookingHistory",
        element: <BookingHistoryPage />
      },
      {
        path: "/AccountDetails",
        element: <AccountDetailsPage />
      }
    ]
  },
  {
    path: "/admin/teams",
    element: <TeamPage />
  },
  {
    path: '/admin/teams/create',
    element: <CreateAdminPage />
  },
  {
    path: '/admin/teams/:id',
    element: <UpdateAdminPage />
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
