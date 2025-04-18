import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { logout: logoutCallback } = useAuth();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutCallback,
    onSuccess: () => {
      queryClient.removeQueries();
    },
  });

  return { logout, isLoading };
};
