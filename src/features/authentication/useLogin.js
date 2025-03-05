import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginAPi } from "../../services/apiAuth";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const { setCurrentAccessToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
      setCurrentAccessToken(user.accessToken);

      delete user.accessToken;
      delete user.refreshToken;

      queryClient.setQueryData(["user"], user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onSettled: () => {
      toast.success("Login Success");
    },
  });

  return { login, isLoading };
};
