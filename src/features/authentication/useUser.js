import { useQuery } from "react-query";
import { authService } from "../../services/apiAuth";
import { USER_QUERY_KEY } from "../../utils/constants";
import { useAuth } from "./useAuth";

export const useUser = () => {
  const { accessToken } = useAuth();

  const { data: user, isLoading } = useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: authService.profile,
    enabled: !!accessToken,
  });
  return { user, isLoading };
};
