import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/Auth/authPage";
import Login from "@components/Auth/login";
import "./Styles/styles.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
      children: [{ index: true, path: "login", element: <Login /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
