import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPages/authPage";
import "./Styles/styles.css";
function App() {
  const router = createBrowserRouter([{ path: "/", element: <AuthPage /> }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
