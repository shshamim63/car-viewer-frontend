import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Form = ({ children, type = "regular", onSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={(theme) => ({
        padding: type === "regular" ? "2.4rem 4rem" : 0,
        border:
          type === "regular" ? `1px solid ${theme.palette.grey[300]}` : "none",
        width: type === "modal" ? "80rem" : "auto",
        overflow: "hidden",
        fontSize: "1.4rem",
      })}
    >
      {children}
    </Box>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onSubmit: PropTypes.func,
};

export default Form;
