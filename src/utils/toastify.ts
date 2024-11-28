import { toast } from "react-toastify";

type ToastifyProps = {
  msg: string;
  type: "info" | "success" | "warning" | "error" | "default";
  toastId?: number | string;
  autoClose?: number | false;
  closeButton?: boolean;
  onClose?: () => void;
  pauseOnFocusLoss?: boolean;
};

const launchToast = ({
  msg,
  type,
  toastId,
  autoClose,
  closeButton,
  onClose,
}: ToastifyProps) => {
  toast(msg, {
    type,
    toastId,
    closeButton: closeButton,
    pauseOnHover: false,
    draggable: false,
    pauseOnFocusLoss: true,
    autoClose: autoClose,
    onClose: onClose,
  });
};

const launchExpiredToast = (
  msg: string,
  type: ToastifyProps["type"],
  onClose: () => void
) => {
  const mainContent = document.querySelector("main");

  if (mainContent) {
    mainContent.style.pointerEvents = "none";
    mainContent.style.opacity = ".5";
  }

  launchToast({
    msg,
    type,
    toastId: "session-expired",
    autoClose: false,
    closeButton: true,
    onClose,
  });
};

export { launchToast, launchExpiredToast };
