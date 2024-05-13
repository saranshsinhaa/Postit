import { toast } from "react-toastify";

export const Toast = (success: boolean, message: string) => {
  toast[success ? "success" : "error"](message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
