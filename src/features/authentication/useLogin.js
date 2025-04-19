import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "./useAuth";
import { USER_QUERY_KEY } from "../../utils/constants";
import { authService } from "../../services/apiAuth";
import { setAxiosAccessToken } from "../../services/axiosInstance";

export const useLogin = () => {
  const { setAccessToken, setIsAuthLoading } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => authService.login({ email, password }),
    onMutate: () => {
      setIsAuthLoading(true);
    },
    onSuccess: (user) => {
      setAccessToken(user.accessToken);
      setAxiosAccessToken(user.accessToken);
      delete user.accessToken;
      delete user.refreshToken;

      queryClient.setQueryData([USER_QUERY_KEY], user);
      toast.success("Login Success");
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onSettled: () => {
      setIsAuthLoading(false);
    },
  });

  return { login, isLoading };
};
