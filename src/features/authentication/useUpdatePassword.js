import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { userService } from "../../services/apiUser";

export const useUpdatePassword = () => {
  const { mutate: updateCurrentPassword, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => userService.updatePassword(data),
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCurrentPassword, isUpdating };
};
