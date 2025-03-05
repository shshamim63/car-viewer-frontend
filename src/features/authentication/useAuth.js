import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of the AuthProvider");

  return context;
};
