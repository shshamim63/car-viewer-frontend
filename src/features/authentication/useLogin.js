import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginAPi } from "../../services/apiAuth";
import { useAuth } from "./useAuth";
import { USER_QUERY_KEY } from "../../utils/constants";

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

      queryClient.setQueryData([USER_QUERY_KEY], user);
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
