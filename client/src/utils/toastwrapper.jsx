import { toast } from "react-hot-toast";

export const toastwrapper = () => {
  return toast.error("Website currently in update!", {
    position: "top-left",
    duration: "100",
  });
};
