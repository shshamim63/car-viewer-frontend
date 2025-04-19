import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/apiAuth";
import { setAxiosAccessToken } from "../../services/axiosInstance";

export const useSignup = () => {
  const { setAccessToken, setIsAuthLoading } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: authService.signup,
    onMutate: () => {
      setIsAuthLoading(true);
    },
    onSuccess: (user) => {
      setAccessToken(user.accessToken);
      setAxiosAccessToken(user.accessToken);

      delete user.accessToken;
      delete user.refreshToken;

      queryClient.setQueryData(["user"], user);
      navigate("/home", { replace: true });
      toast.success(
        `Account successfully created using ${user.email}, please inform your employer`
      );
    },
    onSettled: () => {
      setIsAuthLoading(false);
    },
  });

  return { signup, isLoading };
};
