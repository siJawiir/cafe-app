import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export const showToast = (message: string) => {
  toast.error(<Toast message={message} />, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
  });
};
