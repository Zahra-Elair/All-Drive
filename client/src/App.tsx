import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
