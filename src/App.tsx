import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <>{element}</>;
}

export default App;
