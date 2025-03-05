import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { USER_QUERY_KEY } from "../../utils/constants";
import { useAuth } from "./useAuth";

export function useUser() {
  const { currentAccessToken } = useAuth();

  const { data: user, isLoading } = useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: () => getCurrentUser(currentAccessToken),
    enabled: !!currentAccessToken,
  });

  return { user, isLoading };
}
