import { Avatar, Stack } from "@mui/material";
import { logoSrc } from "../utils/constants";

const Logo = () => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Avatar
        src={logoSrc}
        alt="logo"
        sx={{ height: "6.6rem", width: "auto", aspectRatio: "1" }}
      />
    </Stack>
  );
};

export default Logo;
