import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Homepage from '../HomePage/HomePage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import TokenPage from '../TokenPage/TokenPage';
import SigninPage from '../SigninPage/SigninPage';
import SignupPage from '../SignupPage/SignupPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AllUsers from '../AllUsers/AllUsers';

const ProtectedRoute = ({ children, auth }) => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('walletAddress'); // Dynamically compute login status

  if (!isLoggedIn && auth) {
    return <Navigate to="/sign_in" replace />;
  } else if (isLoggedIn && location.pathname === '/sign_in') {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home_ico" element={<Homepage />} />
          {/* <Route path="home_memecoin" element={<HomePage2 />} />
          <Route path="home_pepecoin" element={<HomePage3 />} /> */}
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="token" element={<TokenPage />} />
          
          {/* Protected Dashboard Route */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute auth={true}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="sign_in" element={<SigninPage />} />
          <Route path="sign_up" element={<SignupPage />} />
          <Route path="admin/all-users/cario" element={<AllUsers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
