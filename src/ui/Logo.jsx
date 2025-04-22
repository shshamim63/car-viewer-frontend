import { Avatar, Stack } from "@mui/material";

const Logo = () => {
  const src = "/logo.png";

  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Avatar
        src={src}
        alt="logo"
        sx={{ height: "6.6rem", width: "auto", aspectRatio: "1" }}
      />
    </Stack>
  );
};

export default Logo;
