import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AuthPage from "@pages/Auth/authPage";
import AdminAuth from "@pages/Auth/adminAuth";
import Login from "@components/Auth/login";
import Signup from "@components/Auth/signup";
import ForgotPassword from "@components/Auth/forgotPassword";
import "./Styles/styles.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
