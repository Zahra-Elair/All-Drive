import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/auth-context";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-gray-50 text-gray-900">
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
