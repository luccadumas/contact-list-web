import React from 'react';
import { Navigate } from 'react-router-dom';

// Pages Component
import Contacts from '../pages/Contacts';

// Authentication related pages
import Login from '../pages/Authentication/Login';
import Logout from '../pages/Authentication/Logout';
import Register from '../pages/Authentication/Register';
import ForgotPwd from '../pages/Authentication/ForgotPassword';
import Account from '../pages/Account';

const authProtectedRoutes = [
  { path: '/account', component: Account },
  { path: '/contacts', component: Contacts },
  { path: '/', exact: true, component: () => <Navigate to="/contacts" /> },
];

const publicRoutes = [
  { path: '/logout', component: Logout },
  { path: '/login', component: Login },
  { path: '/forget-password', component: ForgotPwd },
  { path: '/pages-register', component: Register },
];

export { authProtectedRoutes, publicRoutes };
