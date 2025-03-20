import { useNavigate } from "react-router-dom";
import {} from "@tanstack/react-query";
import { useMutation, useQueryClient } from "react-query";
import { logoutAPI } from "../../services/apiAuth";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
};
