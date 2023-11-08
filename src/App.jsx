import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPages/authPage";
function App() {
  // const route = createBrowserRouter([{ path: "/" }]);
  return (
    <>
      <AuthPage />
    </>
  );
}

export default App;
