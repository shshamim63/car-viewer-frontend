import PropTypes from "prop-types";
import { Box } from "@mui/material";

const MainContainer = ({ children }) => {
  return (
    <Box component="main" sx={{ padding: "4rem 4.8rem 6.4rem" }}>
      {children}
    </Box>
  );
};

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainContainer;
