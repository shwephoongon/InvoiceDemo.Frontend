import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,

          style: {
            background: "#363636",
            color: "#fff",
            fontFamily: "Roboto",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
