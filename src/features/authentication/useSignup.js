import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../../services/apiAuth";

export const useSignup = () => {
  const { setCurrentAccessToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      setCurrentAccessToken(user.accessToken);

      delete user.accessToken;
      delete user.refreshToken;

      queryClient.setQueryData(["user"], user);
      navigate("/home", { replace: true });
      toast.success(
        `Account successfully created using ${user.email}, please inform your employer`
      );
    },
  });

  return { signup, isLoading };
};
