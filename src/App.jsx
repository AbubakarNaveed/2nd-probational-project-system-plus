import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./Styles/styles.css";
import AuthPage from "@pages/Auth/authPage";
import AdminAuth from "@pages/Auth/adminAuth";
import Login from "@components/Auth/login";
import Signup from "@components/Auth/signup";
import ForgotPassword from "@components/Auth/forgotPassword";
import Dashboard from "@pages/User/dashboard";
import DefaultScreen from "@components/Dashboard/Main/DefaultScreen";
import Setting from "@components/Dashboard/Main/Settings";
import Account from "@components/Dashboard/Main/Settings/account";
import Password from "@components/Dashboard/Main/Settings/password";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/signup" />,
    },
    {
      path: "/",
      element: <AuthPage />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgotpassword", element: <ForgotPassword /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminAuth />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <DefaultScreen />,
        },
        { path: "settings", element: <Navigate to="account" /> },

        {
          path: "settings",
          element: <Setting />,
          children: [
            { path: "account", element: <Account /> },
            { path: "password", element: <Password /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
