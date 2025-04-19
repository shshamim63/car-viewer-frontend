import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { userService } from "../../services/apiUser";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUserProfile, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => userService.updateProfile(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      toast.success("account updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUserProfile, isUpdating };
};
