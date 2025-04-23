import PropTypes from "prop-types";
import { Grid } from "@mui/material";

const FormLayout = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        padding: 5,
      }}
    >
      <Grid
        size={{
          xs: 12,
          sm: 10,
          md: 8,
          lg: 8,
          xl: 8,
        }}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "80%",
            lg: "60%",
            xl: "60%",
          },
          margin: "0 auto",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

FormLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormLayout;
